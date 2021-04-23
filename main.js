// A main.js file that contains all DOM related JavaScript

// QUERY SELECTORS

// headings

var chooseFormatHeading = document.querySelector("#chooseFormatHeading")
var mtgHeading = document.querySelector("#mtgHeading")
var rpsHeading = document.querySelector("#rpsHeading")

// rps images

var rpsImgRock = document.querySelector("#rpsImgRock");
var rpsImgPaper = document.querySelector("#rpsImgPaper");
var rpsImgScissors = document.querySelector("#rpsImgScissors");

// mtg images

var mtgImgRock = document.querySelector("#mtgImgRock");
var mtgImgPaper = document.querySelector("#mtgImgPaper");
var mtgImgScissors = document.querySelector("#mtgImgScissors");
var mtgImgLizard = document.querySelector("#mtgImgLizard");
var mtgImgAlien = document.querySelector("#mtgImgAlien");

// buttons

var changeFormatBtn = document.querySelector("#changeFormatBtn")
var rpsBtn = document.querySelector("#rpsBtn");
var mtgBtn = document.querySelector("#mtgBtn");

// arrays

var rpsChoices = ["rock", "paper", "scissors"];
var mtgChoices = ["rock", "paper", "scissors", "lizard", "alien"];

// EVENT LISTENERS

// buttons

changeFormatBtn.addEventListener("click", showHome);
rpsBtn.addEventListener("click", rpsGame);
mtgBtn.addEventListener("click", mtgGame);

// images

rpsImgRock.addEventListener("click", rpsHumanChoiceR);
rpsImgPaper.addEventListener("click", rpsHumanChoiceP);
rpsImgScissors.addEventListener("click", rpsHumanChoiceS);
mtgImgScissors.addEventListener("click", mtgHumanChoiceS);
mtgImgRock.addEventListener("click", mtgHumanChoiceR);
mtgImgPaper.addEventListener("click", mtgHumanChoiceP);
mtgImgAlien.addEventListener("click", mtgHumanChoiceA);
mtgImgLizard.addEventListener("click", mtgHumanChoiceL);

// FUNCTIONS

// instance of Game

// var testInstance = new Game(test1, test2, test3);

// rps choices

function rpsHumanChoiceR() {
  var rpsHumanChoice = "rock";
  testInstance.determineWinnerRps();
}

function rpsHumanChoiceP() {
  var rpsHumanChoice = "paper";
  testInstance.determineWinnerRps();
}

function rpsHumanChoiceS() {
  var rpsHumanChoice = "scissors";
  testInstance.determineWinnerRps();
}

// mtg choices

function mtgHumanChoiceR() {
  var mtgHumanChoice = "rock";
  testInstance.determineWinnerMtg();
}

function mtgHumanChoiceP() {
  var mtgHumanChoice = "paper";
  testInstance.determineWinnerMtg();
}

function mtgHumanChoiceS() {
  var mtgHumanChoice = "rock";
  testInstance.determineWinnerMtg();
}

function mtgHumanChoiceA() {
  var mtgHumanChoice = "alien";
  testInstance.determineWinnerMtg();
}

function mtgHumanChoiceL() {
  var mtgHumanChoice = "lizard";
  testInstance.determineWinnerMtg();
}

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

// hide/show helper functions

function hide(e) {
  e.classList.add("hidden")
}

function show(e) {
  e.classList.remove("hidden")
}

/// hide game screens
// try to show and hide div for these

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

// home settings

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

// show game screens

function rpsGame() {
  hideHome();
  // hideMtgGame();
  show(rpsImgRock);
  show(rpsImgPaper);
  show(rpsImgScissors);
  show(changeFormatBtn);
}

function mtgGame() {
  hideHome();
  // hideRpsGame();
  show(mtgHeading);
  show(mtgImgRock);
  show(mtgImgPaper);
  show(mtgImgScissors);
  show(mtgImgLizard);
  show(mtgImgAlien);
  show(changeFormatBtn);
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