let bricks = []; // Array to store bricks
let brickWidth = 40; // Width of each brick
let brickHeight = 20; // Height of each brick

function setup() {
  createCanvas(400, 400); // Adjust the canvas size as needed
}

function draw() {
  background(220); // Set the background color

  // Draw and update each brick
  for (let i = 0; i < bricks.length; i++) {
    let brick = bricks[i];
    brick.y += 5; // Move the brick down by 5 pixels per frame

    fill(255, 0, 0); // Set the fill color for the brick (red)
    rect(brick.x, brick.y, brickWidth, brickHeight); // Draw the brick

    // Check if the brick has reached the bottom of the screen
    if (brick.y + brickHeight >= height) {
      bricks.splice(i, 1); // Remove the brick from the array
      i--; // Adjust the loop index
    }
  }
}

function mouseClicked() {
  let brick = {
    x: mouseX - brickWidth / 2, // X position of the brick at mouse click
    y: mouseY - brickHeight / 2, // Y position of the brick at mouse click
  };
  bricks.push(brick); // Add the brick to the array
}





