// A main.js file that contains all DOM related JavaScript

//////////////////////////////////////////////////////
////////////////////// ARRAYS ////////////////////////
//////////////////////////////////////////////////////

var rpsChoices = ["rock", "paper", "scissors"];
var mtgChoices = ["rock", "paper", "scissors", "lizard", "alien"];

//////////////////////////////////////////////////////
//////////////////// INSTANCES ///////////////////////
//////////////////////////////////////////////////////

// var human = new Player("Human", "💀")
// var computer = new Player("Computer", "🤖")

// var game = new Game(human, computer);

//////////////////////////////////////////////////////
////////////////// QUERY SELECTORS ///////////////////
//////////////////////////////////////////////////////

// HEADINGS

var chooseFormatHeading = document.querySelector("#chooseFormatHeading")
var mtgHeading = document.querySelector("#mtgHeading")
var rpsHeading = document.querySelector("#rpsHeading")

// RPS IMAGES

var rpsImgRock = document.querySelector("#rpsImgRock");
var rpsImgPaper = document.querySelector("#rpsImgPaper");
var rpsImgScissors = document.querySelector("#rpsImgScissors");

// MTG IMAGES

var mtgImgRock = document.querySelector("#mtgImgRock");
var mtgImgPaper = document.querySelector("#mtgImgPaper");
var mtgImgScissors = document.querySelector("#mtgImgScissors");
var mtgImgLizard = document.querySelector("#mtgImgLizard");
var mtgImgAlien = document.querySelector("#mtgImgAlien");

// BUTTONS

var changeFormatBtn = document.querySelector("#changeFormatBtn")
var rpsBtn = document.querySelector("#rpsBtn");
var mtgBtn = document.querySelector("#mtgBtn");

//////////////////////////////////////////////////////
/////////////////// EVENT LISTENERS //////////////////
//////////////////////////////////////////////////////

// BUTTONS

changeFormatBtn.addEventListener("click", showHome);
rpsBtn.addEventListener("click", rpsGame);
mtgBtn.addEventListener("click", mtgGame);

// IMAGES

// rps

rpsImgRock.addEventListener("click", rpsHumanChoiceRock);
rpsImgPaper.addEventListener("click", rpsHumanChoicePaper);
rpsImgScissors.addEventListener("click", rpsHumanChoiceScissors);

// mtg

mtgImgScissors.addEventListener("click", mtgHumanChoiceScissors);
mtgImgRock.addEventListener("click", mtgHumanChoiceRock);
mtgImgPaper.addEventListener("click", mtgHumanChoicePaper);
mtgImgAlien.addEventListener("click", mtgHumanChoiceAlien);
mtgImgLizard.addEventListener("click", mtgHumanChoiceLizard);

//////////////////////////////////////////////////////
///////////////////// FUNCTIONS //////////////////////
//////////////////////////////////////////////////////

////////// HUMAN CHOICES (FUNCTION TRIGGERED WHEN IMAGE CLICKED) //////////

// RPS HUMAN CHOICE

function rpsHumanChoiceRock() {
  rpsTieWinLose("rock");
}

function rpsHumanChoicePaper() {
  rpsTieWinLose("paper");
}

function rpsHumanChoiceScissors() {
  rpsTieWinLose("scissors");
}

// MTG HUMAN CHOICE

function mtgHumanChoiceRock() {
  mtgTieWinLose("rock");
}

function mtgHumanChoicePaper() {
  mtgTieWinLose("paper");
}

function mtgHumanChoiceScissors() {
  mtgTieWinLose("scissors");
}

function mtgHumanChoiceAlien() {
  mtgTieWinLose("alien");
}

function mtgHumanChoiceLizard() {
  mtgTieWinLose("lizard");
}

////////// FUNCTIONS THAT DECIDE THE WINNER BASED ON CONDITIONALS //////////

// RPS WINNER FUNCTION

function rpsTieWinLose(choice) {
  var rpsCompChoice = getRandomRpsChoice();
  var rpsHumanChoice = choice;

// tie

  if (rpsHumanChoice === rpsCompChoice) {
    tieAlert();

// comp throws rock

  } else if (rpsCompChoice === "rock" && rpsHumanChoice==="scissors") {
    // loseAlert();
    computer.wins++
  } else if (rpsCompChoice === "rock" && rpsHumanChoice==="paper") {
    winAlert();

// comp throws paper

  } else if (rpsCompChoice === "paper" && rpsHumanChoice==="scissors") {
    winAlert();
    human.wins++
  } else if (rpsCompChoice === "paper" && rpsHumanChoice==="rock") {
    loseAlert();
    computer.wins++

// comp throws scissors

  } else if (rpsCompChoice === "scissors" && rpsHumanChoice==="rock") {
    winAlert();
    human.wins++
  } else if (rpsCompChoice === "scissors" && rpsHumanChoice==="paper") {
    loseAlert();
    computer.wins++
  } 
}

// MTG WINNER FUNCTION

function mtgTieWinLose(choice) {
  var mtgCompChoice = getRandomMtgChoice();
  var mtgHumanChoice = choice;

// tie

  if (mtgHumanChoice === mtgCompChoice) {
    tieAlert();

// comp throws rock

  } else if (mtgCompChoice === "rock" && mtgHumanChoice==="scissors") {
    // loseAlert();
    computer.wins++
  } else if (mtgCompChoice === "rock" && mtgHumanChoice==="paper") {
    // winAlert();
    human.wins++
  } else if (mtgCompChoice === "rock" && mtgHumanChoice==="lizard") {
    // loseAlert();
    computer.wins++
  } else if (mtgCompChoice === "rock" && mtgHumanChoice==="alien") {
    // winAlert();
    human.wins++

// comp throws paper

  } else if (mtgCompChoice === "paper" && mtgHumanChoice==="scissors") {
    winAlert();
    human.wins++
  } else if (mtgCompChoice === "paper" && mtgHumanChoice==="rock") {
    loseAlert();
    computer.wins++
  } else if (mtgCompChoice === "paper" && mtgHumanChoice==="lizard") {
    winAlert();
    human.wins++
  } else if (mtgCompChoice === "paper" && mtgHumanChoice==="alien") {
    loseAlert();
    computer.wins++

// comp throws scissors

  } else if (mtgCompChoice === "scissors" && mtgHumanChoice==="rock") {
    winAlert();
    human.wins++
  } else if (mtgCompChoice === "scissors" && mtgHumanChoice==="paper") {
    loseAlert();
    computer.wins++
  } else if (mtgCompChoice === "scissors" && mtgHumanChoice==="lizard") {
    loseAlert();
    computer.wins++
  } else if (mtgCompChoice === "scissors" && mtgHumanChoice==="alien") {
    winAlert();
    human.wins++

// comp throws lizard

  } else if (mtgCompChoice === "lizard" && mtgHumanChoice==="rock") {
    winAlert();
  } else if (mtgCompChoice === "lizard" && mtgHumanChoice==="paper") {
    loseAlert();
    computer.wins++
  } else if (mtgCompChoice === "lizard" && mtgHumanChoice==="scissors") {
    winAlert();
    human.wins++
  } else if (mtgCompChoice === "lizard" && mtgHumanChoice==="alien") {
    loseAlert();
    computer.wins++

// comp throws alien

  } else if (mtgCompChoice === "alien" && mtgHumanChoice==="paper") {
    winAlert();
    human.wins++
  } else if (mtgCompChoice === "alien" && mtgHumanChoice==="rock") {
    loseAlert();
    computer.wins++
  } else if (mtgCompChoice === "alien" && mtgHumanChoice==="lizard") {
    winAlert();
    human.wins++
  } else if (mtgCompChoice === "alien" && mtgHumanChoice==="scissors") {
    loseAlert();
    computer.wins++
  } 
}

////////// SHOW AND HIDING ELEMENTS ON DIFFERENT PAGES //////////

// hiding games specifically (try to show and hide div for these later)

function hideRpsGame() {
  hide(rpsHeading);
  hide(rpsImgRock);
  hide(rpsImgScissors);
  hide(rpsImgPaper);
}

function hideMtgGame() {
  hide(mtgHeading);
  hide(mtgImgRock);
  hide(mtgImgPaper);
  hide(mtgImgScissors);
  hide(mtgImgLizard);
  hide(mtgImgAlien);
}

// show & hide home stuffs

function showHome() {
  hide(changeFormatBtn);
  show(chooseFormatHeading);
  show(mtgBtn);
  show(rpsBtn);
  hideRpsGame();
  hideMtgGame();
}

function hideHome() {
  hide(chooseFormatHeading);
  hide(mtgBtn);
  hide(rpsBtn);
}

// displays for each game

function rpsGame() {
  // var game = new Game("human", "computer");
  hideHome();
  show(rpsImgRock);
  show(rpsImgPaper);
  show(rpsImgScissors);
  show(changeFormatBtn);
}

function mtgGame() {
  // var game = new Game(human, computer);
  hideHome();
  show(mtgHeading);
  show(mtgImgRock);
  show(mtgImgPaper);
  show(mtgImgScissors);
  show(mtgImgLizard);
  show(mtgImgAlien);
  show(changeFormatBtn);
}

////////// HELPER FUNCTIONS //////////

// RANOMIZER

// randomizer helper

function getRandomIndex(array) {
  return Math.floor(Math.random()*array.length);
};

// random game choices

function getRandomRpsChoice() {
	var randomRpsChoice = getRandomIndex(rpsChoices);
  return rpsChoices[randomRpsChoice];
}

function getRandomMtgChoice() {
	var randomMtgChoice = getRandomIndex(mtgChoices);
  return mtgChoices[randomMtgChoice];
}

// SHOW & HIDE

function hide(e) {
  e.classList.add("hidden")
}

function show(e) {
  e.classList.remove("hidden")
}

// ALERT BUTTON TEST

function winAlert() {
  alert ("YOU WIN!");
}

function loseAlert() {
  alert ("YOU LOSE!");
}

function tieAlert() {
  alert ("TIE!");
}