function setup() {
  noCanvas();
  let buttons = selectAll('.question-button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].mouseClicked(showAnswer);
  }
}

function showAnswer() {
  // Get the answer from the button's data attribute
  let answer = this.elt.getAttribute('data-answer');
  
  // Display the answer in the answerDiv
  let answerDiv = select('#answerDiv');
  answerDiv.html(`Answer: ${answer}`);
}

  