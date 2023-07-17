// Object with graphic properties
let graphicObject = {
  width: 100,
  height: 100,
  color: [255, 0, 0],
  positionX: 200,
  positionY: 150
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Draw the graphic using object properties
  fill(graphicObject.color);
  rect(graphicObject.positionX, graphicObject.positionY, graphicObject.width, graphicObject.height);
}









