// A main.js file that contains all DOM related JavaScript

//////////////////////////////////////////////////////
////////////////////// ARRAYS ////////////////////////
//////////////////////////////////////////////////////

var rpsChoices = ["rock", "paper", "scissors"];
var mtgChoices = ["rock", "paper", "scissors", "lizard", "alien"];

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

mtgImgScissors.addEventListener("click", mtgHumanChoiceScissor);
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
  tieWinLose("rock");
}

function mtgHumanChoicePaper() {
  tieWinLose("paper");
}

function mtgHumanChoiceScissors() {
  tieWinLose("scissors");
}

function mtgHumanChoiceAlien() {
  tieWinLose("alien");
}

function mtgHumanChoiceLizard() {
  tieWinLose("lizard");
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
    loseAlert();
  } else if (rpsCompChoice === "rock" && rpsHumanChoice==="paper") {
    winAlert();

// comp throws paper

  } else if (rpsCompChoice === "paper" && rpsHumanChoice==="scissors") {
    winAlert();
  } else if (rpsCompChoice === "paper" && rpsHumanChoice==="rock") {
    loseAlert();

// comp throws scissors

  } else if (rpsCompChoice === "scissors" && rpsHumanChoice==="rock") {
    winAlert();
  } else if (rpsCompChoice === "scissors" && rpsHumanChoice==="paper") {
    loseAlert();
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
    loseAlert();
  } else if (mtgCompChoice === "rock" && mtgHumanChoice==="paper") {
    winAlert();
  } else if (mtgCompChoice === "rock" && mtgHumanChoice==="lizard") {
    loseAlert();
  } else if (mtgCompChoice === "rock" && mtgHumanChoice==="alien") {
    winAlert();

// comp throws paper

  } else if (mtgCompChoice === "paper" && mtgHumanChoice==="scissors") {
    winAlert();
  } else if (mtgCompChoice === "paper" && mtgHumanChoice==="rock") {
    loseAlert();
  } else if (mtgCompChoice === "paper" && mtgHumanChoice==="lizard") {
    winAlert();
  } else if (mtgCompChoice === "paper" && mtgHumanChoice==="alien") {
    loseAlert();

// comp throws scissors

  } else if (mtgCompChoice === "scissors" && mtgHumanChoice==="rock") {
    winAlert();
  } else if (mtgCompChoice === "scissors" && mtgHumanChoice==="paper") {
    loseAlert();
  } else if (mtgCompChoice === "scissors" && mtgHumanChoice==="lizard") {
    loseAlert();
  } else if (mtgCompChoice === "scissors" && mtgHumanChoice==="alien") {
    winAlert();

// comp throws lizard

  } else if (mtgCompChoice === "lizard" && mtgHumanChoice==="rock") {
    winAlert();
  } else if (mtgCompChoice === "lizard" && mtgHumanChoice==="paper") {
    loseAlert();
  } else if (mtgCompChoice === "lizard" && mtgHumanChoice==="scissors") {
    winAlert();
  } else if (mtgCompChoice === "lizard" && mtgHumanChoice==="alien") {
    loseAlert();

// comp throws alien

  } else if (mtgCompChoice === "alien" && mtgHumanChoice==="paper") {
    winAlert();
  } else if (mtgCompChoice === "alien" && mtgHumanChoice==="rock") {
    loseAlert();
  } else if (mtgCompChoice === "alien" && mtgHumanChoice==="lizard") {
    winAlert();
  } else if (mtgCompChoice === "alien" && mtgHumanChoice==="scissors") {
    loseAlert();
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
  hideHome();
  show(rpsImgRock);
  show(rpsImgPaper);
  show(rpsImgScissors);
  show(changeFormatBtn);
}

function mtgGame() {
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