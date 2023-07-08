// Array of shapes with their properties
let shapes = [
  { x: 50, y: 50, size: 80, color: 'red' },
  { x: 150, y: 150, size: 100, color: 'blue' },
  { x: 250, y: 250, size: 120, color: 'green' },
  { x: 350, y: 350, size: 90, color: 'yellow' }
];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  // Loop through each shape in the array
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    // Call the drawShape() function with the shape's properties
    drawShape(shape.x, shape.y, shape.size, shape.color);
  }
}

function drawShape(x, y, size, color) {
  // Set the fill color
  fill(color);
  // Disable shape outline
  noStroke();
  // Draw an ellipse shape with the given properties
  ellipse(x, y, size, size);
}
