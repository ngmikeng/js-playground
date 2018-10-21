"use strict";

var Game = {
  canvas: undefined,
  canvasContext: undefined,
  rectanglePosition : 0
};

Game.start = function() {
  Game.canvas = document.getElementById("gameCanvas");
  Game.canvasContext = Game.canvas.getContext("2d");
  Game.mainLoop();
};

Game.update = function() {
  var d = new Date();
  Game.rectanglePosition = d.getTime() % Game.canvas.width;
};

Game.draw = function() {
  Game.canvasContext.fillStyle = "blue";
  Game.canvasContext.fillRect(Game.rectanglePosition, 100, 50, 50);
}

Game.clearCanvas = function () {
  Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

Game.mainLoop = function() {
  Game.clearCanvas();
  Game.update();
  Game.draw();
  window.setTimeout(Game.mainLoop, 1000 / 60);
}

document.addEventListener('DOMContentLoaded', Game.start);
