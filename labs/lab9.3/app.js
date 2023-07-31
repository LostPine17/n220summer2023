let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
  ];
  
  // Create a container to hold the divs
  const container = document.createElement('div');
  
  for (let i = 0; i < objects.length; i++) {
    // Create a div element for each object in the array
    const divElement = document.createElement('div');
  
    // Set the div properties using setAttribute and style property
    divElement.style.backgroundColor = objects[i].color;
    divElement.style.height = objects[i].height + 'px';
    divElement.style.width = objects[i].width + 'px';
  
    // Append the div element to the container
    container.appendChild(divElement);
  }
  
  // Append the container with all the divs to the document body
  document.body.appendChild(container);
  