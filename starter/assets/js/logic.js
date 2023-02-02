// Query Selectors to select and manipulate HTML elements
var startquiz = document.getElementById("start");
var timerElement = document.querySelector(".timer");
var quizPage = document.getElementById("quizPage");
var endscreen = document.getElementById("end-screen");
var choices = document.getElementById("choices");
var finalscore = document.getElementById("final-score");


let score = 0;

startquiz.addEventListener("click", function() {
    startscreen.style.display = "none";
    quizPage.style.display = "block";
  });


// 

choices.addEventListener("click", function(event) {
  if (event.target.id === "choice1") {
    score++;
  }

  quizPage.style.display = "none";
  endscreen.style.display = "block";
  finalscore.innerHTML = ` ${score}`;
});

endscreen.addEventListener("click", function(event) {

})