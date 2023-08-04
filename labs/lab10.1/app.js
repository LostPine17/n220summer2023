// Variable to store the squares
let squares;

function setup() {
  noCanvas();
  
  // Get all the elements with class "square"
  squares = selectAll('.square');
  
  // Add a click event listener to each square
  for (let i = 0; i < squares.length; i++) {
    squares[i].mouseClicked(changeColor);
  }
}

function changeColor() {
  // Get the color from the data attribute
  let color = this.elt.getAttribute('data-color');
  
  // Change the background color of the clicked square
  this.style('background-color', color);
}

  