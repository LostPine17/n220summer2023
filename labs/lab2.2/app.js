let x = 0;

    function setup() {
      createCanvas(800, 600);
    }

    function draw() {
      background(220);

      fill(31, 224, 44);
      circle(x, height / 2, 50);

      x += 5;

      if (x > width + 50) {
        x = -50;
      }
    }