var canvas = undefined;
var canvasContext = undefined;
var LIMIT_LOOPS = 100;
var countMainLoop = 0;

function start() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  mainLoop();
}

function update() {}

function draw() {}

function mainLoop() {
  canvasContext.fillStyle = "blue";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  update();
  draw();
  countMainLoop++;
  if (countMainLoop <= LIMIT_LOOPS) {
    window.setTimeout(mainLoop, 1000 / 60);
    console.log('Main loops: ' + countMainLoop);
  }
}

document.addEventListener('DOMContentLoaded', start);
