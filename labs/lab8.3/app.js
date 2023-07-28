// Variables to store the circle's position
let circleX, circleY;

// Constants to control the circle's movement and color change
const circleSpeed = 3;
const distanceThreshold = 7;

function setup() {
  // Create a canvas of size 400x400
  createCanvas(400, 400);

  // Set the initial position of the circle to the center of the canvas
  circleX = width / 2;
  circleY = height / 2;
}

function draw() {
  // Set the background color to light gray (220) on each frame
  background(220);

  // Update the circle's position based on the mouse's position
  updateCirclePosition();

  // Draw the circle on the canvas
  drawCircle();
}

function updateCirclePosition() {
  // Calculate the distance between the circle and the mouse using the dist() function
  let distance = dist(circleX, circleY, mouseX, mouseY);

  // Check if the distance is greater than the threshold
  if (distance > distanceThreshold) {
    // Move the circle towards the mouse at a constant speed

    // Calculate the angle between the circle and the mouse
    let dx = mouseX - circleX;
    let dy = mouseY - circleY;
    let angle = atan2(dy, dx);

    // Move the circle along the angle towards the mouse at the specified speed
    circleX += cos(angle) * circleSpeed;
    circleY += sin(angle) * circleSpeed;
  }
}

function drawCircle() {
  // Calculate the distance between the circle and the mouse again
  let distance = dist(circleX, circleY, mouseX, mouseY);

  // Determine the color of the circle based on the distance threshold

  // If the distance is less than or equal to the threshold, set the color to red (255, 0, 0)
  // Otherwise, set the color to black (0, 0, 0)
  let circleColor = distance <= distanceThreshold ? color(255, 0, 0) : color(0);

  // Set the fill and stroke colors for the circle
  fill(circleColor);
  stroke(0);

  // Draw the circle at the current position with a size of 50x50 (you can adjust this as needed)
  ellipse(circleX, circleY, 50, 50);
}










