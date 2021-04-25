// A main.js file that contains all DOM related JavaScript

/////////////////////////////////////
//////////// INSTANCES //////////////
/////////////////////////////////////

// MOVE THIS STUFF TO game.js

var game = new Game("rps");

function createPlayers() {
  var human = new Player({ name: "Human", token: "💀" });
  var computer = new Player({ name: "Computer", token: "🤖" });
  game.human.push(human);
  game.computer.push(computer);
}

createPlayers()

//////////////////////////////////////
////////// QUERY SELECTORS ///////////
//////////////////////////////////////

// HEADINGS

var chooseFormatHeading = document.querySelector("#chooseFormatHeading");
var mtgHeading = document.querySelector("#mtgHeading");
var rpsHeading = document.querySelector("#rpsHeading");
var whoWon = document.querySelector("#whoWon");

// IMAGES

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

// BUTTONS

// home buttons

var changeFormatBtn = document.querySelector("#changeFormatBtn");
var rpsBtn = document.querySelector("#rpsBtn");
var mtgBtn = document.querySelector("#mtgBtn");

// var rpsButtons = document.querySelector("#rpsButtons");
// var mtgButtons = document.querySelector("#mtgButtons");

// CHOICES CHOSEN

var rpsSelections = document.querySelector("#rpsSelections");
var mtgSelections = document.querySelector("#mtgSelections");

// SCORES

var computerScore = document.querySelector("#computerScore");
var humanScore = document.querySelector("#humanScore");


///////////////////////////////////////////
//////////// STORAGE GRABBING /////////////
///////////////////////////////////////////

// MOVE THIS STUFF TO game.js

if (localStorage.humanWins === undefined) {
  localStorage.humanWins = 0;
} else {
  humanScore.innerText = game.human[0].retrieveHumanWinsFromStorage();
}

if (localStorage.computerWins === undefined) {
  localStorage.computerWins = 0;
} else {
  computerScore.innerText = game.computer[0].retrieveComputerWinsFromStorage();
}

///////////////////////////////////////////
///////////// EVENT LISTENERS /////////////
///////////////////////////////////////////

// BUTTONS

changeFormatBtn.addEventListener("click", showHomePage);
rpsBtn.addEventListener("click", rpsGamePage);
mtgBtn.addEventListener("click", mtgGamePage);

// IMAGES

// rps images

rpsImgRock.addEventListener("click", rpsHumanChoiceRock);
rpsImgPaper.addEventListener("click", rpsHumanChoicePaper);
rpsImgScissors.addEventListener("click", rpsHumanChoiceScissors);

// mtg images

mtgImgScissors.addEventListener("click", mtgHumanChoiceScissors);
mtgImgRock.addEventListener("click", mtgHumanChoiceRock);
mtgImgPaper.addEventListener("click", mtgHumanChoicePaper);
mtgImgAlien.addEventListener("click", mtgHumanChoiceAlien);
mtgImgLizard.addEventListener("click", mtgHumanChoiceLizard);

//////////////////////////////////////
///////////// FUNCTIONS //////////////
//////////////////////////////////////

///// HUMAN CHOICES (move all to game.js) /////

// RPS HUMAN CHOICES

function rpsHumanChoiceRock() {
  game.determineWinner("rock");
}

function rpsHumanChoicePaper() {
  game.determineWinner("paper");
}

function rpsHumanChoiceScissors() {
  game.determineWinner("scissors");
}

// MTG HUMAN CHOICES

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

///// HIDE & SHOW ELEMENTS ////

// FEATURES

// rps game features

function hideRpsGameFeatures() {
  hide([rpsHeading, rpsImgRock, rpsImgScissors, rpsImgPaper]);
}

function showRpsGameFeatures() {
  show([rpsHeading, rpsImgRock, rpsImgScissors, rpsImgPaper]);
}

// mtg game features

function hideMtgGameFeatures() {
  hide([mtgHeading, mtgImgRock, mtgImgPaper, mtgImgScissors, mtgImgLizard, mtgImgAlien]);
}

function showMtgGameFeatures() {
  show([mtgHeading, mtgImgRock, mtgImgPaper, mtgImgScissors, mtgImgLizard, mtgImgAlien]);
}

// all game features

function hideGameFeatures() {
  hide([changeFormatBtn, rpsSelections, mtgSelections]);
  hideRpsGameFeatures();
  hideMtgGameFeatures();
}

// home features

function hideHomeFeatures() {
  hide([chooseFormatHeading, mtgBtn, rpsBtn]);
}

function showHomeFeatures() {
  show([chooseFormatHeading, mtgBtn, rpsBtn]);
}

// PAGES

// home page

function showHomePage() {
  hideGameFeatures();
  showHomeFeatures();
}

// game pages

function rpsGamePage() {
  game.format = "rps"; // MOVE THIS TO game.js
  hideHomeFeatures();
  showRpsGameFeatures();
  hide([rpsSelections, whoWon]);
  show([changeFormatBtn]);
}

function mtgGamePage() {
	game.format = "mtg"; // MOVE THIS TO game.js
  hideHomeFeatures();
  showMtgGameFeatures();
  hide([mtgSelections, whoWon]);
  show([changeFormatBtn]);
}

// selections pages

function rpsSelectionsPage() {
  game.format = "rps"; // MOVE THIS TO game.js
  hideRpsGameFeatures();
  hideHomeFeatures();
  show([rpsSelections, whoWon]);
  hide([changeFormatBtn]);
  setTimeout(function() {rpsGamePage()}, 2000);
}

function mtgSelectionsPage() {
  game.format = "mtg"; // MOVE THIS TO game.js
  hideMtgGameFeatures();
  hideHomeFeatures();
  show([mtgSelections, whoWon]);
  hide([changeFormatBtn]);
  setTimeout(function() {mtgGamePage()}, 2000);
}

// HELPER FUNCTIONS

// hide/show helper functions

function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
    element = elements[i];
    element.classList.add("hidden");
  }
}

function show(elements) {
  for (var i = 0; i < elements.length; i++) {
    element = elements[i];
    element.classList.remove("hidden");
  }
}
