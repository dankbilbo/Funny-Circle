let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d");
function init(){
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas()
}
init();
function redraw(){
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight);
}
function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    redraw()
    drawCircle()
}
resizeCanvas()
function getRandomHex(){
    return Math.floor(Math.random() * 255);
}
function getRandomColor(){
    let red = getRandomHex();
    let blue = getRandomHex();
    let green = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")"
}
function drawCircle(){
    let color = getRandomColor();
    ctx.beginPath();
    ctx.arc(300, 300, circle.radius, 0, 2 * Math.PI);
    ctx.fillstyle = color;
    ctx.fill();
}
drawCircle()
let str = "iffactsdontfittotheorychangethefacts";
alert(str.length);