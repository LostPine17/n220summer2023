let colors = ["#FFC0CB", "#C4A484", "#FFF8DC"]; // Array of colors

function setup() {
  createCanvas(400, 200); // Canvas size
}

function draw() {
  background(220); // Set the background color

  let rectWidth = width / colors.length; // Calculate the width of each rectangle

  for (let i = 0; i < colors.length; i++) {
    let x = i * rectWidth; // Calculate the x-coordinate of the rectangle

    fill(colors[i]); // Set the fill color for the current rectangle
    rect(x, 0, rectWidth, height); // Draw the rectangle
  }
}





