// A main.js file that contains all DOM related JavaScript

/////////////////////////////////////
//////////// INSTANCES //////////////
/////////////////////////////////////

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

var rpsChoicesChosen = document.querySelector("#rpsChoicesChosen");
var mtgChoicesChosen = document.querySelector("#mtgChoicesChosen");

// SCORES

var computerScore = document.querySelector("#computerScore");
var humanScore = document.querySelector("#humanScore");


///////////////////////////////////////////
//////////// STORAGE GRABBING /////////////
///////////////////////////////////////////

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

changeFormatBtn.addEventListener("click", showHome);
rpsBtn.addEventListener("click", rpsGame);
mtgBtn.addEventListener("click", mtgGame);

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

// HUMAN CHOICES

// rps human choices

function rpsHumanChoiceRock() {
  game.determineWinner("rock");
}

function rpsHumanChoicePaper() {
  game.determineWinner("paper");
}

function rpsHumanChoiceScissors() {
  game.determineWinner("scissors");
}

// mtg human choices

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

// SHOW AND HIDE ELEMENTS

// hide/show game displays

function hideRpsGame() {
  hide(rpsHeading);
  hideMultiple(rpsImgRock, rpsImgScissors, rpsImgPaper);
  // hide(rpsButtons);
}

function hideMtgGame() {
  hideMultiple(mtgHeading, mtgImgRock, mtgImgPaper);
  hideMultiple(mtgImgScissors, mtgImgLizard, mtgImgAlien);
}

// hide/show home displays

function showHome() {
  hide(changeFormatBtn);
  showMultiple(chooseFormatHeading, mtgBtn, rpsBtn);
  hideRpsGame();
  hideMtgGame();
  hide(rpsChoicesChosen);
  hide(mtgChoicesChosen);
}

function hideHome() {
  hideMultiple(chooseFormatHeading, mtgBtn, rpsBtn);
}

// hide/show displays for each game

function rpsGame() {
  game.format = "rps";
  hideHome();
  showMultiple(rpsImgRock, rpsImgPaper, rpsImgScissors);
  show(rpsHeading);
  hideMtgGame();
  hide(rpsChoicesChosen);
  hide(mtgChoicesChosen);
  hide(whoWon);
  show(changeFormatBtn);
}

function mtgGame() {
	game.format = "mtg";
  hideHome();
  showMultiple(mtgImgRock, mtgImgPaper, mtgImgScissors);
  showMultiple(mtgImgLizard, mtgImgAlien, mtgHeading);
  hide(mtgChoicesChosen);
  hide(whoWon);
  hideRpsGame();
  show(changeFormatBtn);
}

// hide/show choices-chosen displays

function rpsChoicesChosenScreen() {
  game.format = "rps";
  hideMultiple(rpsImgRock, rpsImgPaper, rpsImgScissors);
  hideHome();
  hideMtgGame();
  show(rpsChoicesChosen);
  show(whoWon);
  hide(rpsHeading);
  hide(changeFormatBtn);
  hide(mtgChoicesChosen);
  // computerScore.innerText = game.computer[0].retrieveComputerWinsFromStorage();
  // humanScore.innerText = game.human[0].retrieveHumanWinsFromStorage();
  setTimeout(function() {rpsGame()}, 2000);
}

function mtgChoicesChosenScreen() {
  game.format = "mtg";
  hideMultiple(mtgImgRock, mtgImgPaper, mtgImgScissors);
  hideMultiple(mtgImgLizard, mtgImgAlien, mtgHeading);
  hideHome();
  show(mtgChoicesChosen);
  show(whoWon);
  hide(changeFormatBtn);
  // computerScore.innerText = game.computer[0].retrieveComputerWinsFromStorage();
  // humanScore.innerText = game.human[0].retrieveHumanWinsFromStorage();
  setTimeout(function() {mtgGame()}, 2000);
}

// hide/show helper functions

function hide(e) {
  e.classList.add("hidden");
}

function show(e) {
  e.classList.remove("hidden");
}

function hideMultiple(a, b, c) {
  a.classList.add("hidden");
  b.classList.add("hidden");
  c.classList.add("hidden");
}

function showMultiple(a, b, c) {
  a.classList.remove("hidden");
  b.classList.remove("hidden");
  c.classList.remove("hidden");
}

// LOCAL STORAGRE

// retrieve past scores

// function pastScores() {
//   this.computer[0].wins = retrieveWinsFromStorage();
//   this.human[0].wins = retrieveWinsFromStorage();
// }
