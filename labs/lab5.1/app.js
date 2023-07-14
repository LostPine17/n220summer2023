// Get the square element
var square = document.getElementById("square");

// Set the initial size
var size = 100;

// Add a click event listener to the square
square.addEventListener("click", function() {
  // Increase the size by 10%
  size *= 1.1;

  // Update the size of the square
  square.style.width = size + "px";
  square.style.height = size + "px";
});





