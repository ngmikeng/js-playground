
let canvas, width, height, ctx;
let fireworks = [];
let particles = [];

setTimeout(setup, 1);
setInterval(loop, 1000 / 60);

function setup() {
  canvas = document.getElementById('canvas');
  setSize(canvas);
  ctx = canvas.getContext('2d');
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);
  fireworks.push(new Firework(Math.random() * (width - 200) + 100, ctx));
  window.addEventListener('resize', windowResized);
  document.addEventListener('click', function(e) {
    fireworks.push(new Firework(e.clientX, ctx));
  });
}

function loop() {
  ctx.globalAlpha = 0.1;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);
  ctx.globalAlpha = 1;

  for (let index = 0; index < fireworks.length; index++) {
    let done = fireworks[index].update();
    fireworks[index].draw();
    if (done) {
      fireworks.splice(index, 1);
    }
  }

  for (let index = 0; index < particles.length; index++) {
    particles[index].update();
    particles[index].draw();
    if (particles[index].lifetime > 80) {
      particles.splice(index, 1);
    }
  }

  if (Math.random() < 1/60) {
    fireworks.push(new Firework(Math.random() * (width - 200) + 100, ctx));
  }
}

class Particle {
  constructor(x, y, col, ctx) {
    this.x = x;
    this.y = y;
    this.col = col;
    this.vel = randomVec(2);
    this.lifetime = 0;
    this.ctx = ctx;
  }

  update() {
    this.x += this.vel.x;
    this.y += this.vel.y;
    this.vel.y += 0.02;
    this.vel.x *= 0.99;
    this.vel.y *= 0.99;
    this.lifetime++;
  }

  draw() {
    this.ctx.globalAlpha = Math.max(1 - this.lifetime / 80, 0);
    this.ctx.fillStyle = this.col;
    this.ctx.fillRect(this.x, this.y, 2, 2);
  }
}

class Firework {
  constructor(x, ctx) {
    this.x = x;
    this.y = height;
    this.isBlown = false;
    this.col = randomCol();
    this.ctx = ctx;
  }

  update() {
    this.y -= 3;
    if (this.y < 350 - Math.sqrt(Math.random() * 500) * 40) {
      this.isBlown = true;
      for (let index = 0; index < 60; index++) {
        particles.push(new Particle(this.x, this.y, this.col, this.ctx));
      }
    }
    return this.isBlown;
  }

  draw() {
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = this.col;
    this.ctx.fillRect(this.x, this.y, 2, 2);
  }
}

function randomCol() {
  let letter = '0123456789ABCDEF';
  let nums = [];

  for (let index = 0; index < 3; index++) {
    nums[index] = Math.floor(Math.random() * 256);
  }

  let brightest = 0;
  for (let index = 0; index < 3; index++) {
    if (brightest < nums[index]) {
      brightest = nums[index];
    }
  }

  brightest /= 255;
  for (let index = 0; index < 3; index++) {
    nums[index] /= brightest;
  }

  let color = '#';
  for (let index = 0; index < 3; index++) {
    color += letter[Math.floor(nums[index] / 16)];
    color += letter[Math.floor(nums[index] % 16)];
  }
  return color;
}

function randomVec(max) {
  let dir = Math.random() * Math.PI * 2;
  let spd = Math.random() * max;
  return {
    x: Math.cos(dir) * spd,
    y: Math.sin(dir) * spd
  };
}

function setSize(canvas) {
  canvas.style.width = (innerWidth) + 'px';
  canvas.style.height = (innerHeight) + 'px';
  width = innerWidth;
  height = innerHeight;

  canvas.width = innerWidth * window.devicePixelRatio;
  canvas.height = innerHeight * window.devicePixelRatio;
  canvas.getContext('2d').scale(window.devicePixelRatio, window.devicePixelRatio);
}

function windowResized() {
  setSize(canvas);
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);
}
