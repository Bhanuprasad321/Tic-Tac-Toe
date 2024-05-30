let btn = document.querySelectorAll(".button"); //btn-buttons
var turnO = true; //"O" person turn
let count = 0; //counting number of clicks for draw case
let winningPat = [
  //winning patterns
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
function soundO() {
  var audio = new Audio("sounds/soundO.mp3");
  audio.playbackRate = 1.5;
  audio.play();
}
function soundX() {
  var audio = new Audio("sounds/soundX.mp3");
  audio.playbackRate = 1.5;
  audio.play();
}
function soundW() {
  var audio = new Audio("sounds/winner.mp3");
  audio.play();
}
function soundD() {
  var audio = new Audio("sounds/soundD.mp3");
  audio.play();
}

let winMsg = document.querySelector(".winner");
let resetBtn = document.querySelector("#reset-btn");
btn.forEach((button) => {
  //clicking function
  button.addEventListener("click", function () {
    count++;
    if (turnO) {
      button.innerText = "O";
      soundO();
      turnO = false;
    } else {
      button.innerText = "X";
      soundX();
      turnO = true;
    }
    button.disabled = true;
    winner();
    let checkWin = winner();
    if ((count === 9) & !checkWin) {
      draw();
    }
  });
});
function showwin(player) {
  //concluding winner
  winMsg.innerText = player + " is the winner";
  winMsg.classList.remove("hide");
  disBtn();
  soundW();
}
resetBtn.addEventListener("click", function () {
  window.location.reload();
});

function winner() {
  //winnig case
  for (let pattern of winningPat) {
    let val1 = btn[pattern[0]].innerText;
    let val2 = btn[pattern[1]].innerText;
    let val3 = btn[pattern[2]].innerText;
    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        showwin(val1);
        return true;
      }
    }
  }
}
function disBtn() {
  //disable button
  for (let i = 0; i < 9; i++) {
    document.querySelectorAll(".button")[i].disabled = true;
  }
}
function draw() {
  //draw case
  winMsg.innerText = "!   Draw   !";
  winMsg.classList.remove("hide");
  soundD();
  disBtn();
}
