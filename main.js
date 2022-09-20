import {hexes, calcHex, createHexGrid} from './hexes.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const a = 2 * Math.PI / 6;
const hexGrid = createHexGrid(21, 14);

function drawHex(x, y, r, text=null, color="white", symbol=null) {
    
    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
      ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
    }
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = "black";
    if (text) {
        ctx.font = '10px sans';
        ctx.fillText(text, x - ctx.measureText(text).width / 2, y + r / 1.5);
    }

    ctx.fillStyle = "black";
    if (symbol) {
        ctx.font = '10px sans';
        ctx.fillText(symbol, x + ctx.measureText(symbol).width, y);
    }
}

function drawHexGrid(width, height, radius) {
    let y = radius;
    let x = radius;
    let r = radius;
    let prev_hex = 0;
    for (let i = 0; i < height; i++) {
        let flag = 1;
        let innerX = x;
        let innerY = y;
        let firstIndex = i.toLocaleString('ru', {minimumIntegerDigits:2});
        for(let j = 0; j < width; j++){
            let secondIndex = j.toLocaleString('ru', {minimumIntegerDigits:2});
            const hex = calcHex(hexGrid, firstIndex, secondIndex);
            const symbol = hexes[hex]['symbol'];
            let color = 'color' in hexes[hex] ? hexes[hex]['color'] : "white";
            if (hex == 9) {
                color = 'color' in hexes[prev_hex] ? hexes[prev_hex]['color'] : "white";
            }
            hexGrid[firstIndex][secondIndex] = hex;
            drawHex(
                innerX, 
                innerY, 
                r, 
                i.toLocaleString('ru', {minimumIntegerDigits:2}) +
                j.toLocaleString('ru', {minimumIntegerDigits:2}), 
                color,
                symbol
            );
            innerX = innerX + r + r * Math.cos(a);
            innerY = innerY + flag * r * Math.sin(a);
            flag = -flag;
            prev_hex = hex;      
        }
        y += 2 * radius * Math.sin(a);
    }
}

function init() {
    drawHexGrid(21, 14, 30);
}

init();