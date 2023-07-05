let diameter = 1;

    function setup() {
      createCanvas(800, 600);
    }

    function draw() {
      background(220);

      const centerX = width / 2;
      const centerY = height / 2;

      fill(111, 3, 252);
      circle(centerX, centerY, diameter);

      diameter += 1;

      if (diameter > 200) {
        diameter = 1;
      }
    }