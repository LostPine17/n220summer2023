// Object with circle properties
let circleObject = {
  x: 200,
  y: 200,
  size: 50
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Update object properties
  circleObject.size += 1; // Increment size by 1
  
  // Draw the circle using object properties
  ellipse(circleObject.x, circleObject.y, circleObject.size, circleObject.size);
}







