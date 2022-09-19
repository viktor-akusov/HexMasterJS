const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const a = 2 * Math.PI / 6;
const hexGrid = {};

function drawHex(x, y, r, text=null, color="white") {
    
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
}

function drawHexGrid(width, height, radius) {
    let y = radius;
    let x = radius;
    let r = radius;
    for (let i = 0; i < height; i++) {
        let flag = 1;
        let innerX = x;
        let innerY = y;
        firstIndex = i.toLocaleString('ru', {minimumIntegerDigits:2});
        hexGrid[firstIndex] = {}
        for(let j = 0; j < width; j++){
            secondIndex = j.toLocaleString('ru', {minimumIntegerDigits:2});
            drawHex(
                innerX, 
                innerY, 
                r, 
                i.toLocaleString('ru', {minimumIntegerDigits:2}) +
                j.toLocaleString('ru', {minimumIntegerDigits:2})
            );
            hexGrid[firstIndex][secondIndex] = 0;
            innerX = innerX + r + r * Math.cos(a);
            innerY = innerY + flag * r * Math.sin(a);
            flag = -flag;       
        }
        y += 2 * radius * Math.sin(a);
    }
}

function init() {
    drawHexGrid(21, 14, 30);
}

init();