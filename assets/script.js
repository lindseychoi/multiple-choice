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

const space1 = document.getElementById("choiceSpace")
const space2 = document.getElementById("choiceSpace1")
const space3 = document.getElementById("choiceSpace2")

//functions

//function to clear the card containing one question so that the next can populate

function submitScore() {
  var inputBox = document.getElementById("inputInitials");
  var initials = inputBox.value.trim();
  var scoreIndex = localStorage.getItem("scoreList");
  let scoreList = new Array();
  var myScore = localStorage.getItem("myScore");
  var removeInputBox = document.getElementById("inputInitials");
  
  

  if (!initials) {
    alert("Name required. Try Again.");
    return;
  }
  if (scoreIndex) {
    scoreList = JSON.parse(scoreIndex);
  }
  removeInputBox.remove();
  document.getElementById("questionSpace").innerHTML = "Score List:";
  scoreList.push({ name: initials, score: myScore });
  localStorage.setItem("scoreList", JSON.stringify(scoreList));
  console.log(JSON.parse(localStorage.getItem("scoreList")));
  inputBox.innerHTML = "";
  document.getElementById("submitInitials").innerHTML = "";
  let scorerList = document.getElementById("scorer-list");
  var scorer;
  var newLi;
  for (let index = 0; index < scoreList.length; index++) {
    scorer = scoreList[index];
    newLi = document.createElement("li");
    newLi.textContent = scorer.name + scorer.score;
    scorerList.appendChild(newLi);
  }
}

function wrongToLastQues() {
  timeLeft -= 5;
  lastQuestion();
}

  function clearQuestion() {

    space1.innerHTML = "";
    space2.innerHTML = "";
    space3.innerHTML = "";
  }

  function wrongToNextQues() {
    console.log("i got clicked 1");
    timeLeft -= 5;
    nextQuestion();
  }

  function wrongToGetScore() {
    timeLeft -= 5;
    getScore();
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
    var choiceSpaceId1 = "choiceSpace1";
    var choiceSpace1 = document.getElementById(choiceSpaceId1);
    var choiceSpaceId2 = "choiceSpace2";
    var choiceSpace2 = document.getElementById(choiceSpaceId2);
    console.log(quizQuestions);

    // ask questions
    setObjTextById(questionSpaceId, quizQuestions[0].question);

    createButton(choiceSpace, quizQuestions[questionCounter].choices[0]);
    createButton(choiceSpace1, quizQuestions[questionCounter].choices[1]);
    createButton(choiceSpace2, quizQuestions[questionCounter].choices[2]);

    space1.addEventListener("click", wrongToNextQues);
    space2.addEventListener("click", wrongToNextQues);
    space3.addEventListener("click", nextQuestion);

    console.log("My current score is " + timeLeft + " after the 1st question");

  }

  function nextQuestion() {
    console.log("next question is ran");
    clearQuestion();

    space1.removeEventListener("click", wrongToNextQues);
    space2.removeEventListener("click", wrongToNextQues);
    space3.removeEventListener("click", nextQuestion);

    // document.getElementById("choiceSpace").removeEventListener("click", wrongToNextQues);
    // document.getElementById("choiceSpace1").removeEventListener("click", wrongToNextQues);
    // document.getElementById("choiceSpace2").removeEventListener("click", nextQuestion);

    var questionSpaceId = "questionSpace";
    var questionCounter = 1;
    var choiceSpaceId = "choiceSpace";
    var choiceSpace = document.getElementById(choiceSpaceId);
    var choiceSpaceId1 = "choiceSpace1";
    var choiceSpace1 = document.getElementById(choiceSpaceId1);
    var choiceSpaceId2 = "choiceSpace2";
    var choiceSpace2 = document.getElementById(choiceSpaceId2);
    console.log(quizQuestions);

    // ask questions
    setObjTextById(questionSpaceId, quizQuestions[1].question);

    createButton(choiceSpace, quizQuestions[questionCounter].choices[0]);
    createButton(choiceSpace1, quizQuestions[questionCounter].choices[1]);
    createButton(choiceSpace2, quizQuestions[questionCounter].choices[2]);

    document.getElementById("choiceSpace").addEventListener("click", wrongToLastQues);
    document.getElementById("choiceSpace1").addEventListener("click", lastQuestion);
    document.getElementById("choiceSpace2").addEventListener("click", wrongToLastQues);


    console.log("My current score is " + timeLeft + " after the 2nd question");
  }

  function lastQuestion() {
    clearQuestion();

    space1.removeEventListener("click", wrongToLastQues);
    space2.removeEventListener("click", lastQuestion);
    space3.removeEventListener("click", wrongToLastQues);

    var questionSpaceId = "questionSpace";
    var questionCounter = 2;
    var choiceSpaceId = "choiceSpace";
    var choiceSpace = document.getElementById(choiceSpaceId);
    var choiceSpaceId1 = "choiceSpace1";
    var choiceSpace1 = document.getElementById(choiceSpaceId1);
    var choiceSpaceId2 = "choiceSpace2";
    var choiceSpace2 = document.getElementById(choiceSpaceId2);
    console.log(quizQuestions);

    // ask questions
    setObjTextById(questionSpaceId, quizQuestions[2].question);

    createButton(choiceSpace, quizQuestions[questionCounter].choices[0]);
    createButton(choiceSpace1, quizQuestions[questionCounter].choices[1]);
    createButton(choiceSpace2, quizQuestions[questionCounter].choices[2]);

    document.getElementById("choiceSpace").addEventListener("click", wrongToGetScore);
    document.getElementById("choiceSpace1").addEventListener("click", getScore);
    document.getElementById("choiceSpace2").addEventListener("click", wrongToGetScore);

    console.log("My current score is " + timeLeft + " after the 3rd question");

  }

  function getScore() {
    clearQuestion();
    var removeTimer = document.getElementById("timer");
    removeTimer.remove();

    document.getElementById("questionSpace").innerHTML = "";
    console.log("getScore is working");
    var myScore = timeLeft;
    console.log("myScore is " + myScore + "!");
    document.getElementById("questionSpace").innerHTML = "Your score is: " + myScore + "! Enter your score and initials below.";
    localStorage.setItem("myScore", myScore);
    var inputBox = document.createElement("input");
    var container = document.getElementById("initialsInput");
    inputBox.id = "inputInitials"
    container.appendChild(inputBox);

    createButton(document.getElementById("submitInitials"), "Submit");
    document.getElementById("submitInitials").addEventListener("click", submitScore);

  }



  //actions
  document.getElementById("strButton").addEventListener("click", countDown);
  document.getElementById("strButton").addEventListener("click", startQuiz);


