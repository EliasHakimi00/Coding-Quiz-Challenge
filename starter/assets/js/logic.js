const startscreen = document.getElementById("startscreen")
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

let score = 0;

// startButton.addEventListener("click", function() {
//   quizQuestion.style.display = "block";
//   highScores.style.display = "none";
//   score = 0;
// });

startButton.addEventListener("click", function() {
    startscreen.style.display = "none";
    quizQuestion.style.display = "block";
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

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    const initials = initialsInput.value;
    const scoreEntry = initials + ": " + score;
  
// create a list item to display the score and initials
const listItem = document.createElement("li");
listItem.textContent = scoreEntry;
scoresList.appendChild(listItem);
  
// store the score in local storage
localStorage.setItem("scoreEntries", JSON.stringify([...JSON.parse(localStorage.getItem("scoreEntries") || "[]"), scoreEntry]));
  
quizResult.style.display = "none";
highScores.style.display = "block";
});
  
window.onload = function() {
const scoreEntries = JSON.parse(localStorage.getItem("scoreEntries") || "[]").sort((a, b) => parseInt(b.split(":")[1]) - parseInt(a.split(":")[1]));
scoreEntries.forEach(scoreEntry => {
    const listItem = document.createElement("li");
    listItem.textContent = scoreEntry;
    scoresList.appendChild(listItem);
    });
};
