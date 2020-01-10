import * as GUI from '@babylonjs/gui/2D'
import { destroyAgent, addAgent, addArtifact } from './agent.js'
import { addPowerStations, addPowerStation, placePowerStations, 
            removeStationWreckage } from './station.js'
import { GAME_PHASES, GAME_LEVELS, ARTIFACT_TYPES,
         TERRAIN_MESH_NAME, LEVELS_MODE} from './constants.js'
import { randn_bm } from './utils'


export function handleLevelComplete(scene) {

    if (LEVELS_MODE === 'manual') {

        if (scene.gameLevel < (GAME_LEVELS.length - 1)) {
            scene.gameLevel += 1
        }
        else {
            scene.gameLevel = 0   // out of levels, reset 
        }

    } else {

        scene.gameLevel += 1   // infinite levels in auto mode

    }

    addLevelControl(scene)

}

export function handleGameOver(scene, handleUpdateGUIinfo) {

    scene.gameScores.push(scene.gameScore)
    scene.hiGameScore = Math.max.apply(Math, scene.gameScores)

    handleUpdateGUIinfo()   

    addGameOverControl(scene)

}




export function addGameOverControl(scene) {

    scene.gamePhase = GAME_PHASES.gameOver

    var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI")

    var panel = new GUI.Rectangle()
    panel.width = "300px"
    panel.height = "140px"
    panel.cornerRadius = 10
    panel.color = "white"
    panel.thickness = 3
    panel.background = "#C70039"
    panel.alpha = 0.75
    advancedTexture.addControl(panel)

    var text1 = new GUI.TextBlock();
    text1.text = "GAME OVER"
    text1.color = "white";
    text1.fontSize = 24;
    text1.top = "-40px"
    advancedTexture.addControl(text1);    

    var button = GUI.Button.CreateSimpleButton("but", "Insert Coin")
    button.width = "120px"
    button.height = "40px"
    button.top = "20px"
    button.cornerRadius = 10
    button.color = "white"
    button.thickness = 2
    button.background = "#514c59"
    button.hoverCursor = "pointer"
    button.isPointerBlocker = true

    button.onPointerClickObservable.add(function () {  // REPLAY

        scene.getSoundByName("insertCoin").play()

        removeStationWreckage(scene)
        
        panel.dispose()
        text1.dispose()
    
        button.dispose()
        advancedTexture.dispose()
        
        scene.gameLevel = 0  
        scene.gameScore = 0
        scene.gameNumber += 1
        addPowerStations(scene)

        addLevelControl(scene)

        /* reset the package */
        scene.thePackage.loaded = false
        scene.packagePoints = 0
        document.getElementById('innerbar').setAttribute("style", "width:0%");
        document.getElementById('package-loaded').src='textures/mortar_unlit.png'


    });

    advancedTexture.addControl(button)   


}


export function addLevelControl(scene) {

    if (!scene.gameStarted) {

        /* looks like the terrain mesh has to be drawn first
           for the raycasting to work properly. Update station
           locations here for this reason */
        placePowerStations(scene)

        scene.gameStarted = true
    }


    scene.gamePhase = GAME_PHASES.startLevel
    let gameLevel = scene.gameLevel

    /* -------- Clean out old objects ----------- */

    // destroy agents
    for (var agentInfo of scene.agents) {
        destroyAgent(agentInfo, scene)
    }
    scene.agents = []
    scene.addAgentCounter = 0
    scene.agentsDestroyed = 0

    // destroy artifacts
    for (var artifact of scene.artifacts) {
        artifact.meshes.shell.dispose()
    }
    scene.artifacts = []

    // destroy fire targets
    for (var mesh of scene.fireTargets)
        mesh.dispose()
    
     scene.fireTargets = []


 

    /* ---------- Render Babylonjs GUI --------------------- */
    let levelData = getLevelData(scene)
    
    var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI")

    var panel = new GUI.Rectangle()
    panel.width = "400px"
    panel.height = "180px"
    panel.cornerRadius = 10
    panel.color = "white"
    panel.thickness = 3
    panel.background = "#615c69"
    panel.alpha = 0.75
    advancedTexture.addControl(panel)

    var text1 = new GUI.TextBlock();
    text1.text = "Level " + (gameLevel + 1)
    text1.color = "white";
    text1.fontSize = 24;
    text1.top = "-50px"
    advancedTexture.addControl(text1);    

    var text2 = new GUI.TextBlock();
    text2.text = levelData.tip
    text2.color = "white";
    text2.fontSize = 14;
    text2.top = "-10px"
    advancedTexture.addControl(text2);       

    var button = GUI.Button.CreateSimpleButton("but", "Play")
    button.width = "90px"
    button.height = "40px"
    button.top = "45px"
    button.cornerRadius = 10
    button.color = "white"
    button.thickness = 1.5
    button.background = "#514c59"
    button.hoverCursor = "pointer"
    button.isPointerBlocker = true

    button.onPointerClickObservable.add(function () {  // PLAY

        scene.getSoundByName("play").play()
        
        panel.dispose()
        text1.dispose()
        text2.dispose()
        button.dispose()
        advancedTexture.dispose()
        
        /* -------- Build new objects for this level ------- */
        makeLevel(scene, levelData)

        scene.gamePhase = GAME_PHASES.playing

    });

    advancedTexture.addControl(button)   

}

function getLevelData(scene) {

    if (LEVELS_MODE === 'auto')
        return autoLevelData()
    else
        return manualLevelData()
}

// Get the variables for the level (to inform level gui)
function autoLevelData() {

    let max_bots = 15

    let levelData = {
        agents: [],
        artifacts: [],
        tip: ""
    }

    let totalHealth = 0
    
    // sample number of agents 
    let numbots = Math.ceil(Math.random() * max_bots)
    
    // assign agent health (skew towards lower vals, and create agent
    for (var i = 0; i < numbots; ++i) {
        let agentHealth = Math.ceil(Math.random() * 100)
        totalHealth += agentHealth
        levelData.agents.push(agentHealth)
        
    }

    let healthPercent = (totalHealth / (max_bots * 100)) * 100
    healthPercent =  Math.floor(healthPercent)

    // create 5-10 artifacts, random sizes
    let numArtifacts = randn_bm(5, 10, 1.0)
    numArtifacts = Math.floor(numArtifacts)

    for (var j = 0; j < numArtifacts; j++) {

        let s = Math.random()

        if (s < 0.33)
            levelData.artifacts.push(ARTIFACT_TYPES.small)
        else if (s < 0.66)
            levelData.artifacts.push(ARTIFACT_TYPES.medium)
        else
            levelData.artifacts.push(ARTIFACT_TYPES.large)
    }    

    // create level tip
    let levelDifficulty = ""
    if (totalHealth < 100)
        levelDifficulty = "Cake Walk"
    else if (totalHealth < 300)
        levelDifficulty = "Easy"
    else if (totalHealth < 700)
        levelDifficulty = "Medium"
    else if (totalHealth < 900)
        levelDifficulty = "Hard"
    else
        levelDifficulty = "Better close your eyes."

    let tip = "You will face " + numbots + " bots. Total bot strength is " 
        + healthPercent + "%."
    tip += "\nDifficulty: " + levelDifficulty

    levelData.tip = tip

    return levelData
}


function manualLevelData(scene) {

    let levelData = {
        agents: [],
        artifacts: [],
        tip: ""
    }   

    let gameLevel = scene.gameLevel

    for (var agentHealth of GAME_LEVELS[gameLevel].agents) {
        levelData.agents.push(agentHealth)
    }

    // add artifacts  TODO for the orientation level, place them manually
    var i
    for (i = 0; i < GAME_LEVELS[gameLevel].artifacts.small; ++i) {
        levelData.artifacts.push(ARTIFACT_TYPES.small)
    }
    for (i = 0; i < GAME_LEVELS[gameLevel].artifacts.med; ++i) {
        levelData.artifacts.push(ARTIFACT_TYPES.medium)
    }
    for (i = 0; i < GAME_LEVELS[gameLevel].artifacts.large; ++i) {
        levelData.artifacts.push(ARTIFACT_TYPES.large)
    }    

    levelData.tip = GAME_LEVELS[gameLevel].tip

    return levelData

}

function makeLevel(scene, levelData) {

    let gameLevel = scene.gameLevel

    for (var agentHealth of levelData.agents) {
        addAgent(scene, agentHealth)
    }

    for (var artifactType of levelData.artifacts) {
        addArtifact(scene, artifactType)
    }

}


/* -------------- DEBUG / CHEAT ------------------ */
export function addDebugListener(scene) {
    
    window.addEventListener("keydown", function(e) {
      handleDebug(e) 
    })
  
  }
  
  
function handleDebug(e) {
  
    if ( (e.which === 83) && (e.altKey) ) {
        restoreStations(e)
        console.log("DEBUG: " + e.which)
    }

    if ( (e.which === 84) && (e.altKey) ) {
        hideTerrain(e)
        console.log("DEBUG: " + e.which)
    }

}


function hideTerrain(e) {

    var c = e.currentTarget.document.getElementsByTagName('canvas')[0]
    var scene = c.bjsScene

    let wasVisible = scene.getMeshByName(TERRAIN_MESH_NAME).isVisible
    scene.getMeshByName(TERRAIN_MESH_NAME).isVisible = !wasVisible
}

function restoreStations(e) {

    var c = e.currentTarget.document.getElementsByTagName('canvas')[0]
    var scene = c.bjsScene

    if (scene.gamePhase != GAME_PHASES.playing)
        return


    // loop backwards since splice reindexes
    let i = scene.wreckedStations.length
    while (i--) {

        let wreck = scene.wreckedStations[i]

         // the wrecks always exist but may be disabled
        if (wreck.shell.isEnabled()) {  

            // get the station info
            let id = wreck.id
            let posx = wreck.shell.position.x
            let posz = wreck.shell.position.z

            /* remove the wreckage */
            wreck.shell.dispose()
            wreck.innerCore.dispose()
            wreck.particles.dispose()

            scene.wreckedStations.splice(i, 1)

            /* replace the station */
            addPowerStation(scene, posx, posz, id)


        }
    
    }

    //console.log("wrecked stations length: " + scene.wreckedStations.length)
}
