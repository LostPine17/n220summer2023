function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let x = width / 2;
  let y = height / 2;
  let diameter = 200;

  for (let i = 0; i < 40; i++) {
    let radius = diameter / 2;
    
    circle(x, y, diameter);
    
    diameter -= 5; // Decrease diameter by 5 pixels for the next circle
  }
}




