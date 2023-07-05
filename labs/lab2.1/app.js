function setup() {
    createCanvas(400, 300);
  }

  function draw() {
    background(220);
    
    if (mouseX > width / 2) {
      fill(255, 0, 0);
    } else {
      fill(0, 0, 255);
    }

    circle(mouseX, mouseY, 50);
  }