let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');
let isDrawing = false;

function dimensions(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;    
}

function startDrawing(e){
    isDrawing = true;
    draw(e);
}

function finishDrawing(){
    isDrawing = false;
    c.beginPath();
}

function draw(e){
    if(!isDrawing)
        return;
    c.lineWidth=5;
    c.lineCap="round";
    c.lineTo(e.clientX,e.clientY);
    c.stroke();
    c.beginPath();
    c.moveTo(e.clientX,e.clientY);
}

window.addEventListener('resize',function(){
    dimensions();
});

window.addEventListener('load',function(){
    dimensions();
    canvas.addEventListener('mousedown',startDrawing);
    canvas.addEventListener('mouseup',finishDrawing);
    canvas.addEventListener('mousemove',draw);
});