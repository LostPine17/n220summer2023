let circleYPositions = []; // Array to store Y positions of circles

function setup() {
  createCanvas(400, 400); // Adjust the canvas size as needed
}

function draw() {
  background(220); // Set the background color

  if (frameCount % 10 === 0) {
    let circleY = 0; // Initial Y position of the circle
    circleYPositions.push(circleY); // Add the Y position to the array
  }

  for (let i = 0; i < circleYPositions.length; i++) {
    let circleY = circleYPositions[i];
    circleY += 5; // Move the circle down by 5 pixels per frame
    circleYPositions[i] = circleY; // Update the Y position in the array

    fill(0, 0, 255); // Set the fill color for the circle (red)
    circle(width / 2, circleY, 20); // Draw the circle at the top center
  }
}





