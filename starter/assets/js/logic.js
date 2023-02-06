const startscreen = document.getElementById("startscreen");
const startButton = document.getElementById("start");
const quizQuestion = document.getElementById("quizPage");
const quizQuestion2 = document.getElementById("quizPage2");
const quizQuestion3 = document.getElementById("quizPage3");
const highScores = document.getElementById("high-scores");
const quizResult = document.getElementById("end-screen");
const answer1 = document.getElementById("choice1");
const answer2 = document.getElementById("choice2");
const answer3 = document.getElementById("choice3");
const answer4 = document.getElementById("choice4");
const answer5 = document.getElementById("choice5");
const answer6 = document.getElementById("choice6");
const answer7 = document.getElementById("choice7");
const answer8 = document.getElementById("choice8");
const answer9 = document.getElementById("choice9");
const answer10 = document.getElementById("choice10");
const answer11 = document.getElementById("choice11");
const answer12 = document.getElementById("choice12");
const submitButton = document.getElementById("submit");
const initialsInput = document.getElementById("initials");
const scoresList = document.getElementById("scores-list");
const highScoresButton = document.getElementById("highScoresButton");

highScoresButton.addEventListener("click", function() {
  startscreen.style.display = "none";
  quizQuestion.style.display = "none";
  quizQuestion2.style.display = "none";
  quizQuestion3.style.display = "none";
  quizResult.style.display = "none";
  highScores.style.display = "block";
});

let score = 0;

startButton.addEventListener("click", function() {
  startscreen.style.display = "none";
  quizQuestion.style.display = "block";
  highScores.style.display = "none";
  
});

function stopTimer() {
    clearInterval();
  }


answer1.addEventListener("click", function() {
  score = 1;
  quizQuestion.style.display = "none";
  quizQuestion2.style.display = "block";
});
answer2.addEventListener("click", function() {
  score = 0;
  quizQuestion.style.display = "none";
  quizQuestion2.style.display = "block";
});
answer3.addEventListener("click", function() {
  score = 0;
  quizQuestion.style.display = "none";
  quizQuestion2.style.display = "block";
});
answer4.addEventListener("click", function() {
  score = 0;
  quizQuestion.style.display = "none";
  quizQuestion2.style.display = "block";
});

answer5.addEventListener("click", function() {
    score ++;
    quizQuestion.style.display = "none";
    quizQuestion2.style.display = "none";
    quizQuestion3.style.display = "block";
});
answer6.addEventListener("click", function() {
    score != 2;
    quizQuestion.style.display = "none";
    quizQuestion2.style.display = "none";
    quizQuestion3.style.display = "block";
});
answer7.addEventListener("click", function() {
    score != 2;
    quizQuestion.style.display = "none";
    quizQuestion2.style.display = "none";
    quizQuestion3.style.display = "block";
});
answer8.addEventListener("click", function() {
    score != 2;
    quizQuestion.style.display = "none";
    quizQuestion2.style.display = "none";
    quizQuestion3.style.display = "block";
});
answer9.addEventListener("click", function() {
    score != 3;
    quizQuestion.style.display = "none";
    quizQuestion2.style.display = "none";
    quizQuestion3.style.display = "none";
    quizResult.style.display = "block";
    stopTimer()
});
answer10.addEventListener("click", function() {
    score ++;
    quizQuestion.style.display = "none";
    quizQuestion2.style.display = "none";
    quizQuestion3.style.display = "none";
    quizResult.style.display = "block";
    stopTimer()
});
answer11.addEventListener("click", function() {
    score != 3;
    quizQuestion.style.display = "none";
    quizQuestion2.style.display = "none";
    quizQuestion3.style.display = "none";
    quizResult.style.display = "block";
    stopTimer()
});
answer12.addEventListener("click", function() {
    score != 3;
    quizQuestion.style.display = "none";
    quizQuestion2.style.display = "none";
    quizQuestion3.style.display = "none";
    quizResult.style.display = "block";
    stopTimer()
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
    localStorage.removeItem("scoreEntries");
    scoresList.innerHTML = "";
});
highScores.appendChild(clearScoresButton);

// Define a variable for the timer
let count = 30;
let intervalId;

// Restart the timer when the player clicks play again
playAgainButton.addEventListener("click", function() {
  count = 30;
  console.log("Timer reset to 30 seconds");
});

// Timer function which also redirects quiz to the quizResult page if time runs out
function startTimer() {
  intervalId = setInterval(function() {
    count--;
    document.getElementById("time").innerHTML = count + " seconds remaining";
    console.log(count);
    if (count === 0) {
      clearInterval(intervalId);
      alert("Time is up!");
      quizQuestion.style.display = "none";
      quizQuestion2.style.display = "none";
      quizQuestion3.style.display = "none";
      quizResult.style.display = "block";
    }
  }, 1000);
}
document.getElementById("start").addEventListener("click", function() {
    startTimer();
  });

function stopTimer() {
  clearInterval(intervalId);
}

// Stop timer when last question is answered
answer9.addEventListener("click", function(){
    stopTimer()
})
answer10.addEventListener("click", function(){
    stopTimer()
})
answer11.addEventListener("click", function(){
    stopTimer()
})
answer12.addEventListener("click", function(){
    stopTimer()
})