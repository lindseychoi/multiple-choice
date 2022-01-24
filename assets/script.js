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
      answer: 2
    },

    {
      question: "How old is the earth?",
      choices: ["12 million years", "4.54 billion years", "6,000 years"],
      answer: 1
    },

    {
      question: "Are the dinosaurs extinct?",
      choices: ["Maybe", "Yes", "No"],
      answer: 1
    }

  ];

//functions

//function to clear the card containing one question so that the next can populate
function clearQuestion() {
  document.getElementById("choiceSpace").innerHTML = "";
}

function wrongAnswer() {
  timeLeft -= 5;
}

//function to clear the timer in getScore
function clearTimerButton() {
  document.getElementById("timer").innerHTML = "";
}

//call current question in a function so that the card can clear before the next question appears
function setObjTextById(objId, text) {

  document.getElementById(objId).innerText = text;
}

//call function with the eventlistener at the bottom when start is clicked, starts the timer/countdown
function countDown() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft === 0) {
      timeLeft = 0;
      clearInterval(timeLeft);
      timeEl.textContent = timeLeft;
      getScore();
    }

    if (getScore) {
      clearInterval(timeLeft);
    }
  }, 1000);
}

//tell user time is at 0, enter initials and score into local storage

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

  document.getElementById("choiceSpace", quizQuestions[0].choices[0]).addEventListener("click", wrongAnswer); 
  document.getElementById("choiceSpace", quizQuestions[0].choices[1]).addEventListener("click", wrongAnswer); 
  document.getElementById("choiceSpace", quizQuestions[0].choices[2]).addEventListener("click", nextQuestion);

  console.log("My current score is " + timeLeft + " after the 1st question");

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

  document.getElementById("choiceSpace", quizQuestions[1].choices[0]).addEventListener("click", wrongAnswer); 
  document.getElementById("choiceSpace", quizQuestions[1].choices[2]).addEventListener("click", wrongAnswer); 
  document.getElementById("choiceSpace", quizQuestions[1].choices[1]).addEventListener("click", lastQuestion);

  console.log("My current score is " + timeLeft + " after the 2nd question");
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

  document.getElementById("choiceSpace", quizQuestions[2].choices[0]).addEventListener("click", wrongAnswer);
  document.getElementById("choiceSpace", quizQuestions[2].choices[0]).addEventListener("click", getScore); 
 
  document.getElementById("choiceSpace", quizQuestions[2].choices[2]).addEventListener("click", wrongAnswer);
  document.getElementById("choiceSpace", quizQuestions[2].choices[2]).addEventListener("click", getScore); 
 
  document.getElementById("choiceSpace", quizQuestions[2].choices[1]).addEventListener("click", getScore);

  console.log("My current score is " + timeLeft + " after the 3rd question");

}

function getScore() {
  clearQuestion();
  document.getElementById("questionSpace").innerHTML = "";
  console.log("getScore is working");
  var myScore = timeLeft;
  console.log("myScore is " + myScore + "!");
  document.getElementById("questionSpace").innerHTML = "Your score is: " + myScore + "! Enter your score and initials below.";
}



//actions
document.getElementById("strButton").addEventListener("click", countDown);
document.getElementById("strButton").addEventListener("click", startQuiz);


