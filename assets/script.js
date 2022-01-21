/**
From the README:
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
 */

/**
type and format question
type and format answers as buttons
function to clear question
function to run next question
function for timer/countdown
three wrong answers take time off when clicked
correct answer click starts next question
same class and style for all four questions
use study session app for the initials and score input
 */






//variables
var timeLeft = 35;
var timeEl = document.getElementById("timer");
var quizQuestion = 

//functions

//function to clear the card containing one question so that the next can populate
function clearQuestion() {
    
}

//questions in a function so that the card can clear before the next question appears
function myQuestions() {

}

//call function with the eventlistener at the bottom when start is clicked, starts the timer/countdown
function countDown() {
  var secondsLeft = 30;
  var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        sendGameover();
      }
   }, 1000);
}

//tell user time is at 0, enter initials and score into local storage
function sendGameover() {
  console.log("working fine");
}

//logic

//actions
document.getElementById("strButton").addEventListener("click", countDown);