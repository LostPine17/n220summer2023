// Game settings
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const PADDLE_WIDTH = 120;
const PADDLE_HEIGHT = 10;
const PADDLE_SPEED = 10;
const BALL_SIZE = 12;
const BALL_SPEED = 7;
const BRICK_ROWS = 6;
const BRICK_COLUMNS = 11;
const BRICK_WIDTH = SCREEN_WIDTH / BRICK_COLUMNS;
const BRICK_HEIGHT = 30;
const BRICK_COLORS = ["red", "orange", "yellow", "green", "blue", "purple"]; // Colors for each row of bricks

// Variables
let paddleX; // The player
let ballX, ballY, ballSpeedX, ballSpeedY; // The ball
let bricks;
let gameStarted = false;
let gameState = "playing"; // "playing" or "gameOver"
let score = 0; // Counter for bricks destroyed

// Setup function - called once at the beginning
function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  paddleX = SCREEN_WIDTH / 2 - PADDLE_WIDTH / 2;
  resetBall();
  createBricks();
}

// Function to create the array of bricks based on the settings 
function createBricks() {
  bricks = [];
  for (let i = 0; i < BRICK_ROWS; i++) {
    for (let j = 0; j < BRICK_COLUMNS; j++) {
      let brick = {
        x: j * BRICK_WIDTH,
        y: i * BRICK_HEIGHT + 70,
        visible: true,
      };
      bricks.push(brick);
    }
  }
}

// Draw function - called repeatedly to update the game elements
function draw() {
  background(0);
  // Starts game with title screen
  if (!gameStarted) {
    displayTitle ("BREAKOUT");
    displaySubMessage ("Press Space to Start");
    displaySubMessageTwo ("(Use Arrow Keys to Move)");
  } else {
    movePaddle();
    if (gameState !== "gameOver") {
      moveBall();
      drawBall();
    }
    checkCollisions();
    drawPaddle();
    drawBricks();
    displayScore(); // Displays the score counter
  }

  // Resets bricks if they are all gone
  let visibleBricks = bricks.filter((brick) => brick.visible);
  if (visibleBricks.length === 0 && gameState !== "gameOver") {
    createBricks();
    score += 1000; // Award bonus points for completion 
  }

  // Displays message based on game state
  if (gameState === "gameOver") {
    displayMessage("GAME OVER");
    displaySubMessage("Press Space to Try Again");
  } 
}

// Function to display the title
function displayTitle(message) {
  textSize(80);
  textAlign(CENTER, CENTER);
  // Define the color speed to control the rate of color change
  let colorSpeed = 0.1; // Adjust this value to change the speed (lower values slow it down)

  // Generate a changing color based on frameCount and colorSpeed
  let titleColorIndex = floor(frameCount * colorSpeed) % BRICK_COLORS.length;
  let titleColor = color(BRICK_COLORS[titleColorIndex]);

  stroke(255);
  strokeWeight(5);
  fill(titleColor);
  text(message, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2 - 60);
  noStroke();
}

// Function to display game over message on the canvas
function displayMessage(message) {
  textSize(48);
  textAlign(CENTER, CENTER);
  fill(255);
  text(message, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2 + 60);
}

// Function to display "press space" sub-messages on the canvas
function displaySubMessage(message) {
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(255);
  text(message, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2 + 140);
}

// Function to display arrow key sub-message on the canvas
function displaySubMessageTwo(message) {
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(255);
  text(message, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2 + 180);
}

// Function to move the paddle based on user input (left and right arrow keys)
function movePaddle() {
  if (keyIsDown(LEFT_ARROW) && paddleX > 0) {
    paddleX -= PADDLE_SPEED;
  }
  if (keyIsDown(RIGHT_ARROW) && paddleX + PADDLE_WIDTH < SCREEN_WIDTH) {
    paddleX += PADDLE_SPEED;
  }
}

// Function to move the ball and handle collisions with walls
function moveBall() {
  // Only move the ball if the game is not over 
  if (gameState !== "gameOver") {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    // Ball leaves the bottom of the screen (game over)
    if (ballY > SCREEN_HEIGHT) {
      gameOver();
    }
  }
  
    // Ball hits the screen horizontally
    if (ballX < 0 || ballX > SCREEN_WIDTH) {
      ballSpeedX *= -1;
      ballX = constrain(ballX, 0, SCREEN_WIDTH); // Ensure the ball stays within the canvas
    }
  
    // Ball hits the top of the screen
    if (ballY < 0) {
      ballSpeedY *= -1;
      ballY = 0; // Ensure the ball stays within the canvas
    }
}
  
// Initial ball position and speed
function resetBall() {
  ballX = SCREEN_WIDTH / 2;
  ballY = SCREEN_HEIGHT / 2;
  ballSpeedX = 0;
  ballSpeedY = BALL_SPEED;
}

function checkCollisions() {

  // Skip collision checks if the game is over
  if (gameState === "gameOver") {
    return;
  }

  // Paddle collision
  if (
    ballX + BALL_SIZE > paddleX &&
    ballX < paddleX + PADDLE_WIDTH &&
    ballY + BALL_SIZE > SCREEN_HEIGHT - PADDLE_HEIGHT &&
    ballY < SCREEN_HEIGHT - PADDLE_HEIGHT / 2
    ) {
    // Calculate new ball speed based on the distance from the paddle center
    ballSpeedY *= -1;
    let paddleCenter = paddleX + PADDLE_WIDTH / 2;
    let ballDistFromPaddleCenter = ballX - paddleCenter;
    ballSpeedX = map(ballDistFromPaddleCenter, -PADDLE_WIDTH / 2, PADDLE_WIDTH / 2, -BALL_SPEED, BALL_SPEED);
  }

  // Brick collisions
  for (let brick of bricks) {
    if (
      brick.visible && 
      ballX + BALL_SIZE > brick.x && 
      ballX < brick.x + BRICK_WIDTH && 
      ballY + BALL_SIZE > brick.y && 
      ballY < brick.y + BRICK_HEIGHT
      ) {
      ballSpeedY *= -1;
      brick.visible = false; // Makes bricks disappear when hit
      score += 10; // Increase the score counter by 10 points per hit
      break; // Stop checking for collisions once a brick is hit (improves gameplay)
    }
  }
}

// Paddle properties
function drawPaddle() {
  fill(255);
  noStroke();
  rect(paddleX, SCREEN_HEIGHT - PADDLE_HEIGHT - 10, PADDLE_WIDTH, PADDLE_HEIGHT);
}

// Ball properties
function drawBall() {
  fill(255);
  noStroke();
  ellipse(ballX, ballY, BALL_SIZE);
}

// Brick properties
function drawBricks() {
  for (let i = 0; i < bricks.length; i++) {
    let brick = bricks[i];
    if (brick.visible) {
      let rowColor = BRICK_COLORS[Math.floor(i / BRICK_COLUMNS) % BRICK_COLORS.length]; // Get the color for the row
      fill(rowColor);
      stroke(0);
      strokeWeight(5);
      rect(brick.x, brick.y, BRICK_WIDTH, BRICK_HEIGHT);
    }
  }
}

// Function to handel game over state
function gameOver() {
  gameState = "gameOver";
} 

function resetGame() {
  // Reset ball and bricks to restart the game
  resetBall();
  createBricks();

  score = 0; // Reset the score counter

  // Reset paddle position to the center of the screen
  paddleX = SCREEN_WIDTH / 2 - PADDLE_WIDTH / 2;

  // Reset game state to "playing"
  gameState = "playing";
}

// Fuction to keep track of the score and display it on the top left of the canvas 
function displayScore() {
  textSize(24);
  textAlign(LEFT, TOP);
  fill(255);
  text(`Score: ${score}`, 10, 10);
}

function keyPressed() {
  // Key press to start the game
  if (!gameStarted && keyCode === 32) { // Spacebar key
    gameStarted = true;
  }
  // Initiates restart if game is over
  if (keyCode === 32) {
    if (gameState === "gameOver") {
      resetGame();
    }
  }
}
