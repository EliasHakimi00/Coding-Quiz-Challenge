const startscreen = document.getElementById("startscreen");
const startButton = document.getElementById("start");
const quizQuestion = document.getElementById("quizPage");
const highScores = document.getElementById("high-scores");
const quizResult = document.getElementById("end-screen");
const answer1 = document.getElementById("choice1");
const answer2 = document.getElementById("choice2");
const answer3 = document.getElementById("choice3");
const answer4 = document.getElementById("choice4");
const submitButton = document.getElementById("submit");
const initialsInput = document.getElementById("initials");
const scoresList = document.getElementById("scores-list");

const highScoresButton = document.getElementById("highScoresButton");
highScoresButton.addEventListener("click", function() {
  startscreen.style.display = "none";
  highScores.style.display = "block";
});

let score = 0;

startButton.addEventListener("click", function() {
  startscreen.style.display = "none";
  quizQuestion.style.display = "block";
  highScores.style.display = "none";
});

answer1.addEventListener("click", function() {
  score = 1;
  quizQuestion.style.display = "none";
  quizResult.style.display = "block";
});
answer2.addEventListener("click", function() {
  score = 0;
  quizQuestion.style.display = "none";
  quizResult.style.display = "block";
});
answer3.addEventListener("click", function() {
  score = 0;
  quizQuestion.style.display = "none";
  quizResult.style.display = "block";
});
answer4.addEventListener("click", function() {
  score = 0;
  quizQuestion.style.display = "none";
  quizResult.style.display = "block";
});

const submitScoreButton = document.getElementById("submit");
submitScoreButton.addEventListener("click", function(event) {
  event.preventDefault();
  let initials = initialsInput.value;
  let scoreEntry = initials + ": " + score;

  // add the new score entry to the existing score entries in local storage
  let scoreEntries = JSON.parse(localStorage.getItem("scoreEntries") || "[]");
  scoreEntries.push(scoreEntry);
  localStorage.setItem("scoreEntries", JSON.stringify(scoreEntries));

  quizResult.style.display = "none";
  highScores.style.display = "block";

  // display the score entries on the high scores page
  scoresList.innerHTML = ""; // clear the high scores list
  scoreEntries.forEach(function(entry) {
    let listItem = document.createElement("li");
    listItem.textContent = entry;
    scoresList.appendChild(listItem);
  });
});

// Play again button added
const playAgainButton = document.getElementById("playAgain");
playAgainButton.addEventListener("click", function() {
  highScores.style.display = "none";
  startscreen.style.display = "block";
});
highScores.appendChild(playAgainButton);

// Clear high scores button
const clearScoresButton = document.getElementById("clearScores");
clearScoresButton.addEventListener("click", function() {
    highScores.style.display = "none";
    startscreen.style.display = "block";
    localStorage.removeItem("scoreEntries");
    scoresList.innerHTML = "";
});
highScores.appendChild(clearScoresButton);