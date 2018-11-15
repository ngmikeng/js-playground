"use strict";

var Game = {
  canvas: undefined,
  canvasContext: undefined,
  backgroundSprite: undefined,
  balloonSprite: undefined,
  balloonPosition1: {
    x: 0,
    y: 0
  },
  balloonPosition2: {
    x: 0,
    y: 0
  },
  balloonPosition3: {
    x: 100,
    y: 0
  },
  backgroundMusic: undefined
};

Game.start = function() {
  Game.canvas = document.getElementById("gameCanvas");
  Game.canvasContext = Game.canvas.getContext("2d");
  Game.backgroundSprite = new Image();
  Game.backgroundSprite.src = "sprites/spr_background.jpg";
  Game.backgroundSprite.width = Game.canvas.width;
  Game.backgroundSprite.height = Game.canvas.height;
  Game.balloonSprite = new Image();
  Game.balloonSprite.src = "sprites/spr_balloon.png";
  Game.balloonSprite.width = 100;
  Game.balloonSprite.height = 100;
  Game.backgroundMusic = new Audio("sounds/mario_theme.mp3");
  // Game.backgroundMusic = new Audio("sounds/contra_gameover.mp3");
  Game.backgroundMusic.volume = 0.3;
  Game.backgroundMusic.loop = true;
  Game.mainLoop();
  var toggleMusic = true;
  var musicButton = document.getElementById("musicButton");
  musicButton.addEventListener('click', function(e) {
    if (toggleMusic) {
      Game.backgroundMusic.play();
    } else {
      Game.backgroundMusic.pause();
      Game.backgroundMusic.load();
    }
    toggleMusic = !toggleMusic;
  });
};

Game.update = function() {
  var d = new Date();
  Game.balloonPosition1.x = d.getTime() % Game.canvas.width;
  Game.balloonPosition2.x = (d.getTime() + 100) % Game.canvas.width;
  Game.balloonPosition3.x = (d.getTime() + 200) % Game.canvas.width;
};

Game.draw = function() {
  Game.drawImage(Game.backgroundSprite, {x: 0, y: 0});
  Game.drawImage(Game.balloonSprite, Game.balloonPosition2);
  Game.drawImage(Game.balloonSprite, Game.balloonPosition3);
  // Game.drawImage(Game.balloonSprite, { x : 200, y : 0 });
  // Game.drawImage(Game.balloonSprite, { x : 0, y : 300 });
  // Game.drawImage(Game.balloonSprite, { x : 200, y : 300 });
}

Game.drawImage = function(sprite, position) {
  Game.canvasContext.save();
  Game.canvasContext.translate(position.x, position.y);
  Game.canvasContext.drawImage(sprite, 0, 0, sprite.width, sprite.height);
  Game.canvasContext.restore();
};

Game.clearCanvas = function() {
  Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

Game.mainLoop = function() {
  Game.clearCanvas();
  Game.update();
  Game.draw();
  window.setTimeout(Game.mainLoop, 1000 / 60);
}

document.addEventListener('DOMContentLoaded', Game.start);
