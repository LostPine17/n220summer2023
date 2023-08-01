// Define a list of bad words that you want to check for
const badWordsList = ['clear', 'water', 'tires'];

// Function to check for bad words in the input text
function checkForBadWords() {
  // Get the input text field element from the DOM
  const textInput = document.getElementById('textInput');
  
  // Get the input text and remove leading/trailing white spaces, and convert to lowercase for case-insensitive comparison
  const inputText = textInput.value.trim().toLowerCase();
  
  // Split the input text into an array of words using regular expression to match spaces
  const wordsArray = inputText.split(/\s+/);
  
  // Initialize a tally count to keep track of bad words found
  let tallyCount = 0;

  // Loop through each word in the array to check for bad words
  for (const word of wordsArray) {
    // Check if the word is present in the badWordsList array
    if (badWordsList.includes(word)) {
      // If the word is found in the badWordsList, increment the tally count
      tallyCount++;
    }
  }

  // Get the output element from the DOM to display the results
  const output = document.getElementById('output');
  
  // Display the result based on the tally count of bad words found
  if (tallyCount > 0) {
    output.textContent = `Bad words found: ${tallyCount}`;
  } else {
    output.textContent = 'No bad words found.';
  }

  // Clear the text field for the user to input a new string
  textInput.value = '';
}

