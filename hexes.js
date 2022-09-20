const hexes = {
    0: {
        name: "Plains",
        symbol: null,
        color: "#b2f50a",
        tiles: [11, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    1: {
        name: "Scrub",
        symbol: null,
        color: "#76a303",
        tiles: [3, 8, 2, 1, 1, 1, 1, 1, 1, 1]
    },
    2: {
        name: "Forest",
        symbol: null,
        color: "#026126",
        tiles: [1, 3, 10, 1, 0, 1, 1, 1, 1, 1]
    },
    3: {
        name: "Roughs",
        symbol: null,
        color: "#555555",
        tiles: [2, 2, 1, 3, 2, 5, 2, 1, 1, 1]
    },
    4: {
        name: "Desert",
        symbol: null,
        color: "#f7ed5c",
        tiles: [3, 2, 0, 3, 6, 1, 2, 1, 1, 1]
    },
    5: {
        name: "Hills",
        symbol: null,
        color: "#00ff00",
        tiles: [1, 2, 2, 2, 1, 6, 2, 1, 2, 1]
    },
    6: {
        name: "Mountains",
        symbol: null,
        color: "#ffffff",
        tiles: [1, 1, 1, 2, 1, 4, 8, 0, 1, 1]
    },
    7: {
        name: "Marsh",
        symbol: null,
        color: "#910088",
        tiles: [2, 2, 2, 1, 0, 1, 0, 7, 4, 1]
    },
    8: {
        name: "Pond",
        symbol: null,
        color: "#5555ff",
        tiles: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    9: {
        name: "Depression",
        symbol: "Dp",
        tiles: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
}

const calcHex = (grid, firstIndex, secondIndex) => {
    let hexA;
    try {
    hexA = grid[
        (firstIndex - 1).toLocaleString('ru', {minimumIntegerDigits:2})
    ][(secondIndex).toLocaleString('ru', {minimumIntegerDigits:2})];
    } catch {
        hexA = null;
    }

    let hexB;
    try {
    hexB = grid[
        (firstIndex + 1).toLocaleString('ru', {minimumIntegerDigits:2})
    ][(secondIndex).toLocaleString('ru', {minimumIntegerDigits:2})];
    } catch {
        hexB = null;
    }

    let hexC;
    try {
    hexA = grid[
        (firstIndex).toLocaleString('ru', {minimumIntegerDigits:2})
    ][(secondIndex + 1).toLocaleString('ru', {minimumIntegerDigits:2})];
    } catch {
        hexC = null;
    }

    let hexD;
    try {
    hexA = grid[
        (firstIndex).toLocaleString('ru', {minimumIntegerDigits:2})
    ][(secondIndex - 1).toLocaleString('ru', {minimumIntegerDigits:2})];
    } catch {
        hexD = null;
    }

    let hexE;
    try {
    hexE = grid[
        (firstIndex - 1).toLocaleString('ru', {minimumIntegerDigits:2})
    ][(secondIndex - 1).toLocaleString('ru', {minimumIntegerDigits:2})];
    } catch {
        hexE = null;
    }

    let hexF;
    try {
    hexA = grid[
        (firstIndex - 1).toLocaleString('ru', {minimumIntegerDigits:2})
    ][(secondIndex + 1).toLocaleString('ru', {minimumIntegerDigits:2})];
    } catch {
        hexF = null;
    }

    let resultTiles = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    resultTiles = resultTiles.map(function (num, idx) {
        return num + 
            hexA ? hexes[hexA]['tiles'][idx] : 0 +
            hexB ? hexes[hexB]['tiles'][idx] : 0 +
            hexC ? hexes[hexC]['tiles'][idx] : 0 +
            hexD ? hexes[hexD]['tiles'][idx] : 0 +
            hexE ? hexes[hexE]['tiles'][idx] : 0 +
            hexF ? hexes[hexF]['tiles'][idx] : 0;
      });
    let tilesHeap = []
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < resultTiles[i]; j++) {
            tilesHeap.push(i);
        }
    }
    console.log(resultTiles);
    return tilesHeap.length > 0 ? tilesHeap[Math.floor(Math.random() * tilesHeap.length)] : Math.floor(Math.random() * 10);
}

const createHexGrid = (width, height) => {
    let hexGrid = {}
    for (let i = 0; i < height; i++) {
        let firstIndex = i.toLocaleString('ru', {minimumIntegerDigits:2});
        hexGrid[firstIndex] = {};
        for (let j = 0; j < width; j++) {
            let secondIndex = j.toLocaleString('ru', {minimumIntegerDigits:2});
            hexGrid[firstIndex][secondIndex] = null;
        }
    }
    return hexGrid;
}

export {hexes, calcHex, createHexGrid};