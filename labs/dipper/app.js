function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  drawBigDipper();
}

function drawBigDipper() {
  // Define the positions of the stars in the Big Dipper
  const positions = [
    createVector(180, height - 600),
    createVector(400, height - 600),
    createVector(500, height - 500),
    createVector(600, height - 400),
    createVector(580, height - 220),
    createVector(950, height - 200),
    createVector(980, height - 420)
  ];

  // Draw the stars
  fill(255);
  stroke(255);
  strokeWeight(2);
  positions.forEach(position => {
    // Randomly adjust the brightness of the star
    const brightness = random(100, 255);

    // Draw the star with adjusted brightness
    fill(brightness);
    ellipse(position.x, position.y, 8, 8);
  });
}








