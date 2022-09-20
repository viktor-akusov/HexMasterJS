const hexes = {
    0: {
        name: "Равнина",
        symbol: null,
        color: "#b2f50a",
        description: 'тундра, степь, саванна, прерии, верещатник',
        tiles: [11, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    1: {
        name: "Заросли",
        symbol: null,
        color: "#76a303",
        description: 'кустарник, вельд, чащоба, папоротники',
        tiles: [3, 8, 2, 1, 1, 1, 1, 1, 1, 1]
    },
    2: {
        name: "Лес",
        symbol: null,
        color: "#026126",
        description: 'чаща, рощи, джунгли, перелески',
        tiles: [1, 3, 10, 1, 0, 1, 1, 1, 1, 1]
    },
    3: {
        name: "Пересеченная местность",
        symbol: null,
        color: "#555555",
        tiles: [2, 2, 1, 3, 2, 5, 2, 1, 1, 1]
    },
    4: {
        name: "Пустыня",
        symbol: null,
        color: "#f7ed5c",
        description: 'пустоши, ледяные поля, бесплодные земли',
        tiles: [3, 2, 0, 3, 6, 1, 2, 1, 1, 1]
    },
    5: {
        name: "Холмы",
        symbol: null,
        color: "#00ff00",
        description: 'утесы, дюны, кряжи',
        tiles: [1, 2, 2, 2, 1, 6, 2, 1, 2, 1]
    },
    6: {
        name: "Горы",
        symbol: null,
        color: "#ffffff",
        description: 'плоскогорье, ледники, скалистые вершины',
        tiles: [1, 1, 1, 2, 1, 4, 8, 0, 1, 1]
    },
    7: {
        name: "Болота",
        symbol: null,
        color: "#910088",
        description: 'трясина, топи, торфянники',
        tiles: [2, 2, 2, 1, 0, 1, 0, 7, 4, 1]
    },
    8: {
        name: "Вода",
        symbol: null,
        color: "#5555ff",
        description: 'озера, пруд, бассейн',
        tiles: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    9: {
        name: "Низина",
        symbol: "Низ",
        description: 'овраги, расщелины, каньоны, долины',
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