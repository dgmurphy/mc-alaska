
export function getAgentVerts() {

    var triPyramid = {
        "name": "tripy", "category": ["Polyhedra"], "vertex": [
            [-1, 3, -1], [0, 3, -1], [1.5, 3, 0], [0, 3, 1], [-1, 3, 1], [0, 0, 0]
        ],
        "face": [
            [4, 3, 2, 1, 0], [2, 3, 5], [5, 3, 4], [5, 4, 0], [0, 1, 5], [1, 2, 5]
        ]
    };

    return triPyramid
}


export function getBaseVerts() {

    let verts = {
        "name":"Pentagonal Cupola (J5)",
        "category":["Johnson Solid"],
        "vertex":[[-0.973114,0.120196,-0.57615],[-0.844191,-0.563656,-0.512814],[-0.711039,0.75783,-0.46202],[-0.594483,0.244733,-0.002202],[-0.46556,-0.439119,0.061133],[-0.373515,-1.032518,-0.296206],[-0.15807,1.105692,-0.21402],[-0.041514,0.592595,0.245798],[0.167087,-0.513901,0.348277],[0.259132,-1.1073,-0.009062],[0.429162,0.123733,0.462406],[0.474577,1.03091,0.073124],[0.812101,-0.759438,0.238938],[0.945253,0.562048,0.289732],[1.074175,-0.121804,0.353067]],
        "face":[[4,1,5],[8,9,12],[10,14,13],[7,11,6],[3,2,0],[4,3,0,1],[8,4,5,9],[10,8,12,14],[7,10,13,11],[3,7,6,2],[3,4,8,10,7],[2,6,11,13,14,12,9,5,1,0]]}       
       
        return verts
}


export function getTrucatedDodecahedron() {

    let truncatedDodecahedron = {
        "name":"Truncated Dodecahedron",
        "category":["Archimedean Solid"],
        "vertex":[[0,0,1.014485],[0.3367628,0,0.9569589],[-0.2902233,0.1708204,0.9569589],
        [0.1634681,-0.2944272,0.9569589],[0.5914332,0.1708204,0.806354],
        [-0.5963465,0.1527864,0.806354],[-0.4230517,0.4472136,0.806354],
        [0.1377417,-0.6,0.806354],[0.8302037,0.1527864,0.5626702],
        [0.6667356,0.4472136,0.6201961],[-0.8014407,-0.0472136,0.6201961],
        [-0.3477493,0.7236068,0.6201961],[-0.06735256,-0.8,0.6201961],
        [0.2694102,-0.8,0.5626702],[0.9618722,-0.0472136,0.3189863],
        [0.5339072,0.7236068,0.4695912],[-0.8271671,-0.3527864,0.4695912],
        [-0.9599955,-0.0763932,0.3189863],[-0.3992021,0.8763932,0.3189863],
        [-0.09307895,0.8944272,0.4695912],[-0.3734757,-0.818034,0.4695912],
        [0.5081808,-0.818034,0.3189863],[0.9361459,-0.3527864,0.1683814],
        [1.011448,-0.0763932,-0.0177765],[0.4824544,0.8763932,0.1683814],
        [0.2436839,0.8944272,0.4120653],[-0.663699,-0.6472136,0.4120653],
        [-1.011448,0.0763932,0.0177765],[-0.5577569,0.8472136,0.0177765],
        [-0.5320305,-0.8472136,0.1683814],[0.5577569,-0.8472136,-0.0177765],
        [0.7628511,-0.6472136,0.1683814],[0.9599955,0.0763932,-0.3189863],
        [0.5320305,0.8472136,-0.1683814],[-0.9618722,0.0472136,-0.3189863],
        [-0.9361459,0.3527864,-0.1683814],[-0.7628511,0.6472136,-0.1683814],
        [-0.5081808,0.818034,-0.3189863],[-0.4824544,-0.8763932,-0.1683814],
        [0.3992021,-0.8763932,-0.3189863],[0.8014407,0.0472136,-0.6201961],
        [0.8271671,0.3527864,-0.4695912],[0.663699,0.6472136,-0.4120653],
        [0.3734757,0.818034,-0.4695912],[-0.8302037,-0.1527864,-0.5626702],
        [-0.2694102,0.8,-0.5626702],[-0.5339072,-0.7236068,-0.4695912],
        [-0.2436839,-0.8944272,-0.4120653],[0.09307895,-0.8944272,-0.4695912],
        [0.3477493,-0.7236068,-0.6201961],[0.5963465,-0.1527864,-0.806354],
        [0.06735256,0.8,-0.6201961],[-0.6667356,-0.4472136,-0.6201961],
        [-0.5914332,-0.1708204,-0.806354],[-0.1377417,0.6,-0.806354],
        [0.4230517,-0.4472136,-0.806354],[0.2902233,-0.1708204,-0.9569589],
        [-0.3367628,0,-0.9569589],[-0.1634681,0.2944272,-0.9569589],[0,0,-1.014485]],
        "face":[[0,3,1],[2,6,5],[4,8,9],[7,12,13],[10,17,16],[11,19,18],
        [14,22,23],[15,24,25],[20,26,29],[21,30,31],[27,35,34],[28,37,36],
        [32,40,41],[33,42,43],[38,46,47],[39,48,49],[44,53,52],[45,51,54],
        [50,55,56],[57,58,59],[0,1,4,9,15,25,19,11,6,2],[0,2,5,10,16,26,20,12,7,3],
        [1,3,7,13,21,31,22,14,8,4],[5,6,11,18,28,36,35,27,17,10],
        [8,14,23,32,41,42,33,24,15,9],[12,20,29,38,47,48,39,30,21,13],
        [16,17,27,34,44,52,46,38,29,26],[18,19,25,24,33,43,51,45,37,28],
        [22,31,30,39,49,55,50,40,32,23],[34,35,36,37,45,54,58,57,53,44],
        [40,50,56,59,58,54,51,43,42,41],[46,52,53,57,59,56,55,49,48,47]]
    }
        
    return truncatedDodecahedron
}

export function getTruncatedIcosahedron() {
    let truncatedIcosahedron = {
        "name":"Truncated Icosahedron",
        "category":["Archimedean Solid"],
        "vertex":[[0,0,1.021],[0.4035482,0,0.9378643],[-0.2274644,0.3333333,0.9378643],
        [-0.1471226,-0.375774,0.9378643],[0.579632,0.3333333,0.7715933],
        [0.5058321,-0.375774,0.8033483],[-0.6020514,0.2908927,0.7715933],
        [-0.05138057,0.6666667,0.7715933],[0.1654988,-0.6080151,0.8033483],
        [-0.5217096,-0.4182147,0.7715933],[0.8579998,0.2908927,0.4708062],
        [0.3521676,0.6666667,0.6884578],[0.7841999,-0.4182147,0.5025612],
        [-0.657475,0.5979962,0.5025612],[-0.749174,-0.08488134,0.6884578],
        [-0.3171418,0.8302373,0.5025612],[0.1035333,-0.8826969,0.5025612],
        [-0.5836751,-0.6928964,0.4708062],[0.8025761,0.5979962,0.2017741],
        [0.9602837,-0.08488134,0.3362902],[0.4899547,0.8302373,0.3362902],
        [0.7222343,-0.6928964,0.2017741],[-0.8600213,0.5293258,0.1503935],
        [-0.9517203,-0.1535518,0.3362902],[-0.1793548,0.993808,0.1503935],
        [0.381901,-0.9251375,0.2017741],[-0.2710537,-0.9251375,0.3362902],
        [-0.8494363,-0.5293258,0.2017741],[0.8494363,0.5293258,-0.2017741],
        [1.007144,-0.1535518,-0.06725804],[0.2241935,0.993808,0.06725804],
        [0.8600213,-0.5293258,-0.1503935],[-0.7222343,0.6928964,-0.2017741],
        [-1.007144,0.1535518,0.06725804],[-0.381901,0.9251375,-0.2017741],
        [0.1793548,-0.993808,-0.1503935],[-0.2241935,-0.993808,-0.06725804],
        [-0.8025761,-0.5979962,-0.2017741],[0.5836751,0.6928964,-0.4708062],
        [0.9517203,0.1535518,-0.3362902],[0.2710537,0.9251375,-0.3362902],
        [0.657475,-0.5979962,-0.5025612],[-0.7841999,0.4182147,-0.5025612],
        [-0.9602837,0.08488134,-0.3362902],[-0.1035333,0.8826969,-0.5025612],
        [0.3171418,-0.8302373,-0.5025612],[-0.4899547,-0.8302373,-0.3362902],
        [-0.8579998,-0.2908927,-0.4708062],[0.5217096,0.4182147,-0.7715933],
        [0.749174,0.08488134,-0.6884578],[0.6020514,-0.2908927,-0.7715933],
        [-0.5058321,0.375774,-0.8033483],[-0.1654988,0.6080151,-0.8033483],
        [0.05138057,-0.6666667,-0.7715933],[-0.3521676,-0.6666667,-0.6884578],
        [-0.579632,-0.3333333,-0.7715933],[0.1471226,0.375774,-0.9378643],
        [0.2274644,-0.3333333,-0.9378643],[-0.4035482,0,-0.9378643],[0,0,-1.021]],
        "face":[[0,3,8,5,1],[2,7,15,13,6],[4,10,18,20,11],[9,14,23,27,17],
        [12,21,31,29,19],[16,26,36,35,25],[22,32,42,43,33],[24,30,40,44,34],
        [28,39,49,48,38],[37,47,55,54,46],[41,45,53,57,50],[51,52,56,59,58],
        [0,1,4,11,7,2],[0,2,6,14,9,3],[1,5,12,19,10,4],[3,9,17,26,16,8],
        [5,8,16,25,21,12],[6,13,22,33,23,14],[7,11,20,30,24,15],
        [10,19,29,39,28,18],[13,15,24,34,32,22],[17,27,37,46,36,26],
        [18,28,38,40,30,20],[21,25,35,45,41,31],[23,33,43,47,37,27],
        [29,31,41,50,49,39],[32,34,44,52,51,42],[35,36,46,54,53,45],
        [38,48,56,52,44,40],[42,51,58,55,47,43],[48,49,50,57,59,56],
        [53,54,55,58,59,57]]}

        return truncatedIcosahedron 
}


export function getBrokenIcosahedron() {

    let brokenIcosahedron = {
        "name":"Broken Icosahedron",
        "category":["Archimedean Solid"],
        "vertex":[[0,0,1.021],[0.4035482,0,0.9378643],[-0.2274644,0.3333333,0.9378643],
        [-0.1471226,-0.375774,0.9378643],[0.579632,0.3333333,0.7715933],
        [0.5058321,-0.375774,0.8033483],[-0.6020514,0.2908927,0.7715933],
        [-0.05138057,0.6666667,0.7715933],[0.1654988,-0.6080151,0.8033483],
        [-0.5217096,-0.4182147,0.7715933],[0.8579998,0.2908927,0.4708062],
        [0.3521676,0.6666667,0.6884578],[0.7841999,-0.4182147,0.5025612],
        [-0.657475,0.5979962,0.5025612],[-0.749174,-0.08488134,0.6884578],
        [-0.3171418,0.8302373,0.5025612],[0.1035333,-0.8826969,0.5025612],
        [-0.5836751,-0.6928964,0.4708062],[0.8025761,0.5979962,0.2017741],
        [0.9602837,-0.08488134,0.3362902],[0.4899547,0.8302373,0.3362902],
        [0.7222343,-0.6928964,0.2017741],[-0.8600213,0.5293258,0.1503935],
        [-0.9517203,-0.1535518,0.3362902],[-0.1793548,0.993808,0.1503935],
        [0.381901,-0.9251375,0.2017741],[-0.2710537,-0.9251375,0.3362902],
        [-0.8494363,-0.5293258,0.2017741],[0.8494363,0.5293258,-0.2017741],
        [1.007144,-0.1535518,-0.06725804],[0.2241935,0.993808,0.06725804],
        [0.8600213,-0.5293258,-0.1503935],[-0.7222343,0.6928964,-0.2017741],
        [-1.007144,0.1535518,0.06725804],[-0.381901,0.9251375,-0.2017741],
        [0.1793548,-0.993808,-0.1503935],[-0.2241935,-0.993808,-0.06725804],
        [-0.8025761,-0.5979962,-0.2017741],[0.5836751,0.6928964,-0.4708062],
        [0.9517203,0.1535518,-0.3362902],[0.2710537,0.9251375,-0.3362902],
        [0.657475,-0.5979962,-0.5025612],[-0.7841999,0.4182147,-0.5025612],
        [-0.9602837,0.08488134,-0.3362902],[-0.1035333,0.8826969,-0.5025612],
        [0.3171418,-0.8302373,-0.5025612],[-0.4899547,-0.8302373,-0.3362902],
        [-0.8579998,-0.2908927,-0.4708062],[0.5217096,0.4182147,-0.7715933],
        [0.749174,0.08488134,-0.6884578],[0.6020514,-0.2908927,-0.7715933],
        [-0.5058321,0.375774,-0.8033483],[-0.1654988,0.6080151,-0.8033483],
        [0.05138057,-0.6666667,-0.7715933],[-0.3521676,-0.6666667,-0.6884578],
        [-0.579632,-0.3333333,-0.7715933],[0.1471226,0.375774,-0.9378643],
        [0.2274644,-0.3333333,-0.9378643],[-0.4035482,0,-0.9378643],[0,0,-1.021]],
        "face":[[0,3,8,5,1],[2,7,15,13,6],[4,10,18,20,11],[9,14,23,27,17],
        [12,21,31,29,19],[16,26,36,35,25],[22,32,42,43,33],[24,30,40,44,34],
        [28,39,49,48,38],
        [0,1,4,11,7,2],[0,2,6,14,9,3],[1,5,12,19,10,4],[3,9,17,26,16,8],
        [5,8,16,25,21,12],[6,13,22,33,23,14],[7,11,20,30,24,15],
        [10,19,29,39,28,18],[13,15,24,34,32,22]]}

        return brokenIcosahedron     
}