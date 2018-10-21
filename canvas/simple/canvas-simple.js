
function changeCanvasColor() {
  var canvas = document.getElementById("canvas-simple");
  var context = canvas.getContext("2d");
  context.fillStyle = "silver";
  context.fillRect(0, 0, canvas.width, canvas.height)
}

document.addEventListener('DOMContentLoaded', changeCanvasColor);
