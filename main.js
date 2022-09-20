import {hexes, calcHex, createHexGrid} from './hexes.js';
import { getSettlement, inhabitances } from './inhabitance.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const a = 2 * Math.PI / 6;
const hexGrid = createHexGrid(21, 14);

function drawHex(x, y, r, text=null, color="white", symbol=null, inhabitance=null) {
    
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
        ctx.fillText(symbol, x + r - ctx.measureText(symbol).width * 2.2, y + r / 2.6);
    }

    ctx.fillStyle = "black";
    if (inhabitance) {
        ctx.font = '20px sans';
        ctx.fillText(inhabitance, x - ctx.measureText(inhabitance).width / 2, y);
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
            let inhabitance = hex != 8 ? getSettlement() : null;
            drawHex(
                innerX, 
                innerY, 
                r, 
                i.toLocaleString('ru', {minimumIntegerDigits:2}) +
                j.toLocaleString('ru', {minimumIntegerDigits:2}), 
                color,
                symbol,
                inhabitance
            );
            innerX = innerX + r + r * Math.cos(a);
            innerY = innerY + flag * r * Math.sin(a);
            flag = -flag;
            prev_hex = hex;      
        }
        y += 2 * radius * Math.sin(a);
    }
}

function init(height, width, radius) {
    drawHexGrid(height, width, radius);
    let y_start = radius * height * 1.3;
    Object.keys(hexes).forEach(key => {
        drawHex(radius, y_start, radius, null, hexes[key]['color'], hexes[key]['symbol']);
        ctx.fillStyle = "black";
        if (hexes[key]['name']) {
            ctx.font = '24px sans';
            ctx.fillText(' - ' + hexes[key]['name'], 2.5 * radius, y_start);
        }
        if (hexes[key]['description']) {
            ctx.font = '12px sans';
            ctx.fillText('       ' + hexes[key]['description'], 2.5 * radius, y_start + radius / 2);
        }
        y_start += radius * 2;
    });
    y_start = radius * height * 1.3;
    let x_start = 20 * radius;
    Object.keys(inhabitances).forEach(key => {
        ctx.fillStyle = "black";
        if (inhabitances[key]['symbol']) {
            ctx.font = '35px sans';
            ctx.fillText(inhabitances[key]['symbol'], x_start, y_start);
        }
        if (inhabitances[key]['name']) {
            ctx.font = '24px sans';
            ctx.fillText(' - ' + inhabitances[key]['name'], x_start + 2 * radius, y_start);
        }
        if (inhabitances[key]['description']) {
            ctx.font = '12px sans';
            ctx.fillText('       ' + inhabitances[key]['description'], x_start + 2 * radius, y_start + radius / 2);
        }
        y_start += radius * 2;
    });
}

init(21, 14, 35);