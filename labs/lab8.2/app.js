let circleX, circleY; // Variables to store the circle's position
const circleSize = 100; // Constant for the circle's size
const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']; // Array of four different colors

function setup() {
      createCanvas(400, 400); // Create a canvas with a size of 400x400 pixels
      circleX = width / 2; // Set initial X position of the circle to the center of the canvas
      circleY = height / 2; // Set initial Y position of the circle to the center of the canvas
      drawCircle(colors[0]); // Draw the circle with the first color from the array
    }

function drawCircle(color) {
      fill(color); // Set the fill color for the circle
      ellipse(circleX, circleY, circleSize, circleSize); // Draw the circle at (circleX, circleY) with the given size
    }

function mousePressed() {
      let randomIndex = floor(random(colors.length)); // Generate a random index to pick a color from the array
      let newColor = colors[randomIndex]; // Get a random color from the array
      drawCircle(newColor); // Draw the circle with the new color
    }









