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
var userChoices = document.getElementsByTagName("input[type:button]");
var quizQuestions = 
[
  {
    question: "What is the color of the sky when it is sunny?",
    choices: ["Red", "Green", "Blue"],
    answer: 1
  },
  
  {
    question: "How old is the earth?",
    choices: ["12 million years", "4.54 billion years", "6,000 years"],
    answer: 2
  },

  {
    question: "Are the dinosaurs extinct?",
    choices: ["Maybe", "Yes", "No"],
    answer: 2
  }
  
];

//functions

//function to clear the card containing one question so that the next can populate
function clearQuestion() {
    document.getElementById("choiceSpace").innerHTML = "";
}

//call current question in a function so that the card can clear before the next question appears
function setObjTextById(objId, text) {

  document.getElementById(objId).innerText=text;
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
function createButton(appendElement, buttonText) {
  var btn = document.createElement("button");
  btn.innerHTML = buttonText;
  appendElement.appendChild(btn);
  return btn;
}

function startQuiz() {
  document.getElementById("strButton").innerHTML = "";

  var questionSpaceId = "questionSpace";
  var questionCounter = 0;
  var choiceSpaceId = "choiceSpace";
  var choiceSpace = document.getElementById(choiceSpaceId);
  console.log(quizQuestions);

  // ask questions
  setObjTextById(questionSpaceId, quizQuestions[questionCounter].question);
  
  createButton(choiceSpace, quizQuestions[questionCounter].choices[0]);
  createButton(choiceSpace, quizQuestions[questionCounter].choices[1]);
  createButton(choiceSpace, quizQuestions[questionCounter].choices[2]);

  document.getElementById("choiceSpace").addEventListener("click", nextQuestion);

}

function nextQuestion() {
  clearQuestion();
  var questionSpaceId = "questionSpace";
  var questionCounter = 1;
  var choiceSpaceId = "choiceSpace";
  var choiceSpace = document.getElementById(choiceSpaceId);
  console.log(quizQuestions);

  // ask questions


  setObjTextById(questionSpaceId, quizQuestions[questionCounter].question);
  
  createButton(choiceSpace, quizQuestions[questionCounter].choices[0]);
  createButton(choiceSpace, quizQuestions[questionCounter].choices[1]);
  createButton(choiceSpace, quizQuestions[questionCounter].choices[2]);

  document.getElementById("choiceSpace").addEventListener("click", lastQuestion);
  
}

function lastQuestion() {
  clearQuestion();
  var questionSpaceId = "questionSpace";
  var questionCounter = 2;
  var choiceSpaceId = "choiceSpace";
  var choiceSpace = document.getElementById(choiceSpaceId);
  console.log(quizQuestions);

  // ask questions
  setObjTextById(questionSpaceId, quizQuestions[questionCounter].question);
  
  createButton(choiceSpace, quizQuestions[questionCounter].choices[0]);
  createButton(choiceSpace, quizQuestions[questionCounter].choices[1]);
  createButton(choiceSpace, quizQuestions[questionCounter].choices[2]);

  document.getElementById("choiceSpace").addEventListener("click", getScore);


}

function getScore() {
  clearQuestion();
  document.getElementById("questionSpace").innerHTML = "";
}

//actions
document.getElementById("strButton").addEventListener("click", countDown);
document.getElementById("strButton").addEventListener("click", startQuiz);


