// A main.js file that contains all DOM related JavaScript

////////////////////////////////////////////////
///////////////// INSTANCES ////////////////////
////////////////////////////////////////////////

var game = new Game("rps");

function createPlayers() {
  var human = new Player({ name: "Human", token: "💀" });
  var computer = new Player({ name: "Computer", token: "🤖" });
  game.human.push(human);
  game.computer.push(computer);
}

createPlayers()

/////////////////////////////////////////////////
/////////////// QUERY SELECTORS ////////////////
////////////////////////////////////////////////

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

var rpsButtons = document.querySelector("#rpsButtons")
var mtgButtons = document.querySelector("#mtgButtons")

var choicesChosen = document.querySelector("#choicesChosen")

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

////////////////////////////////////////////////
////////////////// FUNCTIONS ///////////////////
////////////////////////////////////////////////

//////////////// HUMAN CHOICES /////////////////

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
  // hide(rpsImgRock);
  // hide(rpsImgScissors);
  // hide(rpsImgPaper);
  hide(rpsButtons);
}

function hideMtgGame() {
  hide(mtgHeading);
  // hide(mtgImgRock);
  // hide(mtgImgPaper);
  // hide(mtgImgScissors);
  // hide(mtgImgLizard);
  // hide(mtgImgAlien);
  hide(mtgButtons);
}

// show & hide home stuffs

function showHome() {
  hide(changeFormatBtn);
  show(chooseFormatHeading);
  show(mtgBtn);
  show(rpsBtn);
  hideRpsGame();
  hideMtgGame();
  // hide(rpsButtons);
  // hide(mtgButtons);
  hide(choicesChosen);
}

function hideHome() {
  hide(chooseFormatHeading);
  hide(mtgBtn);
  hide(rpsBtn);
  show(changeFormatBtn);
}

// displays for each game

function mtgChoicesChosenScreen() {
  hide(rpsImgRock);
  hide(rpsImgPaper);
  hide(rpsImgScissors);
  hideHome();
  show(choicesChosen);
}

function rpsGame() {
  hideHome();
  show(rpsHeading);
  show(rpsImgRock);
  show(rpsImgPaper);
  show(rpsImgScissors);
  // show(rpsButtons);
  // hide(mtgButtons);
  // hideMtgGame();
  hide(choicesChosen);
}

function mtgGame() {
	game.format = "mtg";
  hideHome();
  show(mtgHeading);
  show(mtgImgRock);
  show(mtgImgPaper);
  show(mtgImgScissors);
  show(mtgImgLizard);
  show(mtgImgAlien);
  // show(mtgButtons);
  hideRpsGame();
  // hide(rpsButtons);
}

////////// HELPER FUNCTIONS //////////

function hide(e) {
  e.classList.add("hidden");
}

function show(e) {
  e.classList.remove("hidden");
}

// function hideShow(e1, e2) {
//   e1.classList.remove("hidden");
//   e2.classList.remove("hidden");
// }



// function pastScores() {
//   this.computer[0].wins = retrieveWinsFromStorage();
//   this.human[0].wins = retrieveWinsFromStorage();
// }