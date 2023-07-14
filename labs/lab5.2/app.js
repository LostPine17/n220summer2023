// Get the container element
var container = document.getElementById("container");

// Generate 100 square divs
for (var i = 0; i < 100; i++) {
  // Create a new square div
  var square = document.createElement("div");
  
  // Set the size and float attribute
  square.style.width = "20px";
  square.style.height = "20px";
  square.style.float = "left";

  // Generate a random background color
  var randomColor = getRandomColor();
  square.style.backgroundColor = randomColor;

  // Append the square div to the container
  container.appendChild(square);
}

// Function to generate a random color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}






