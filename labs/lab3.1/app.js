function setup() {
  createCanvas(500, 100);
}

function draw() {
  background(220);
  
  for (let i = 0; i < 25; i++) {
    let x = i * 20;
    let y = height / 2; 
    
    if (i % 3 === 0 && i % 5 === 0) {
      fill(0, 0, 255);
      rect(x, y, 15, 15);
    }
    
    else if (i % 3 === 0) {
      fill(255, 0, 255);
      ellipse(x, y, 15, 15);
    }
    
    else if (i % 5 === 0) {
      fill(0, 255, 0);
      rect(x, y, 15, 15);
    }
    else {
      fill(0);
      ellipse(x, y, 15, 15);
    }
  }
}
