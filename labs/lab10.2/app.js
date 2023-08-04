let r, g, b;
let colorDiv, currentColorDiv;
let buttons;

function setup() {
  noCanvas();

  r = g = b = 0;
  colorDiv = select("#colorDiv");
  currentColorDiv = select("#currentColorDiv");
  buttons = selectAll("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].mouseClicked(changeColor);
  }
}

function changeColor() {
  // Get the color and value from the button's data attributes
  let color = this.elt.getAttribute("data-color");
  let value = parseInt(this.elt.getAttribute("data-value"));

  // Update the RGB values based on the button press
  if (color === "red") {
    r += value;
  } else if (color === "green") {
    g += value;
  } else if (color === "blue") {
    b += value;
  }

  // Make sure the RGB values stay within the valid range (0-255)
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  // Update the color of the colorDiv
  colorDiv.style("background-color", `rgb(${r}, ${g}, ${b})`);

  // Update the text of the currentColorDiv
  currentColorDiv.html(`RGB Color: ${r}, ${g}, ${b}`);
}


  