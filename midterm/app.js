let player;
let aliens = [];
let bullets = [];
let score = 0;

function setup() {
  createCanvas(400, 400);
  player = new Player();
  createAliens();
}

class Player {
  constructor() {
    this.w = 60;
    this.h = 20;
    this.x = width / 2 - this.w / 2;
    this.y = height - this.h - 10;
    this.speed = 5;
  }

  show() {
    fill(0, 255, 0);
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
  }
}

class Alien {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
    this.xdir = 1;
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    this.x += this.xdir * 2;
    if (this.x + this.r >= width || this.x - this.r <= 0) {
      this.xdir *= -1;
      this.y += this.r;
    }
  }
}

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 4;
  }

  show() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    this.y -= 5;
  }

  hits(alien) {
    let d = dist(this.x, this.y, alien.x, alien.y);
    return d < this.r + alien.r;
  }
}

    function createAliens() {
      const rows = 3;
      const cols = 6;
      const spacing = 40;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          aliens.push(new Alien((j * spacing) + 50, (i * spacing) + 30));
        }
      }
    }

    function draw() {
      background(0);
      player.show();
      player.move();

      for (let i = 0; i < aliens.length; i++) {
        aliens[i].show();
        aliens[i].move();

        // Check if aliens reached the player
        if (aliens[i].y + aliens[i].r >= height) {
          gameOver();
        }
      }

      for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].show();
        bullets[i].move();

        // Check for bullet-alien collisions
        for (let j = aliens.length - 1; j >= 0; j--) {
          if (bullets[i].hits(aliens[j])) {
            bullets.splice(i, 1);
            aliens.splice(j, 1);
            score++;
            break;
          }
        }
      }

      showScore();
    }

    function showScore() {
      fill(255);
      textSize(24);
      text("Score: " + score, 20, 30);
    }

    function gameOver() {
      noLoop();
      fill(255);
      textSize(36);
      textAlign(CENTER);
      text("Game Over", width / 2, height / 2);
    }

    function keyPressed() {
      if (key === " ") {
        bullets.push(new Bullet(player.x + player.w / 2, height - 40));
      }
    }