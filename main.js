// A main.js file that contains all DOM related JavaScript

//////////////////////////////////////////////////////
////////////////////// ARRAYS ////////////////////////
//////////////////////////////////////////////////////

var rpsChoices = ["rock", "paper", "scissors"];
var mtgChoices = ["rock", "paper", "scissors", "lizard", "alien"];

//////////////////////////////////////////////////////
//////////////////// INSTANCES ///////////////////////
//////////////////////////////////////////////////////

var human = new Player("Human", "💀");
var computer = new Player("Computer", "🤖" );

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

// SCORES

var computerScore = document.querySelector("#computerScore");
var humanScore = document.querySelector("#humanScore");

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

////////// HUMAN CHOICES //////////

// RPS HUMAN CHOICE

function rpsHumanChoiceRock() {
  game.determineWinner("rock");
}

function rpsHumanChoicePaper() {
  game.determineWinner("paper");
}

function rpsHumanChoiceScissors() {
  game.determineWinner("scissors");
}

// MTG HUMAN CHOICE

function mtgHumanChoiceRock() {
  game.determineWinner("rock");
}

function mtgHumanChoicePaper() {
  game.determineWinner("paper");
}

function mtgHumanChoiceScissors() {
  game.determineWinner("scissors");
}

function mtgHumanChoiceAlien() {
  game.determineWinner("alien");
}

function mtgHumanChoiceLizard() {
  game.determineWinner("lizard");
}

////////// SHOW AND HIDE ELEMENTS ON DIFFERENT PAGES //////////

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
  show(changeFormatBtn);
}

// displays for each game

function rpsGame() {
  var game = new Game(human, computer, "rps");
  hideHome();
  show(rpsHeading);
  show(rpsImgRock);
  show(rpsImgPaper);
  show(rpsImgScissors);
  return game;
}

function mtgGame() {
  var game = new Game(human, computer, "mtg");
  hideHome();
  show(mtgHeading);
  show(mtgImgRock);
  show(mtgImgPaper);
  show(mtgImgScissors);
  show(mtgImgLizard);
  show(mtgImgAlien);
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