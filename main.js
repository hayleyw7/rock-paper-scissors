///////////////////////////////////////////
///////////// QUERY SELECTORS /////////////
///////////////////////////////////////////

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

var changeFormatBtn = document.querySelector("#changeFormatBtn");
var startOverBtn = document.querySelector("#startOverBtn")
var rpsBtn = document.querySelector("#rpsBtn");
var mtgBtn = document.querySelector("#mtgBtn");

// SELECTIONS

var rpsSelections = document.querySelector("#rpsSelections");
var mtgSelections = document.querySelector("#mtgSelections");

// SCORES

var humanScore = document.querySelector("#humanScore");
var computerScore = document.querySelector("#computerScore");

///////////////////////////////////////////
/////////////// GAME SETUP ////////////////
///////////////////////////////////////////

var game = new Game();
game.initializeLocalStorage();

///////////////////////////////////////////
///////////// EVENT LISTENERS /////////////
///////////////////////////////////////////

// BUTTONS

changeFormatBtn.addEventListener("click", showHomePage);
startOverBtn.addEventListener("click", startOverListener);
rpsBtn.addEventListener("click", rpsGamePage);
mtgBtn.addEventListener("click", mtgGamePage);

// IMAGES

// rps images

rpsImgRock.addEventListener("click", rpsHumanChoiceRock);
rpsImgPaper.addEventListener("click", rpsHumanChoicePaper);
rpsImgScissors.addEventListener("click", rpsHumanChoiceScissors);

// mtg images

mtgImgRock.addEventListener("click", mtgHumanChoiceRock);
mtgImgScissors.addEventListener("click", mtgHumanChoiceScissors);
mtgImgPaper.addEventListener("click", mtgHumanChoicePaper);
mtgImgLizard.addEventListener("click", mtgHumanChoiceLizard);
mtgImgAlien.addEventListener("click", mtgHumanChoiceAlien);

/////////////////////////////////////////
////////////// FUNCTIONS ////////////////
/////////////////////////////////////////

//////////// HUMAN SELECTIONS ///////////

// RPS HUMAN SELECTIONS

function rpsHumanChoiceRock() {
  game.determineWinner("rock");
}

function rpsHumanChoicePaper() {
  game.determineWinner("paper");
}

function rpsHumanChoiceScissors() {
  game.determineWinner("scissors");
}

// MTG HUMAN SELECTIONS

function mtgHumanChoiceRock() {
  game.determineWinner("rock");
}

function mtgHumanChoicePaper() {
  game.determineWinner("paper");
}

function mtgHumanChoiceScissors() {
  game.determineWinner("scissors");
}

function mtgHumanChoiceLizard() {
  game.determineWinner("lizard");
}

function mtgHumanChoiceAlien() {
  game.determineWinner("alien");
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
  hide([chooseFormatHeading, startOverBtn, mtgBtn, rpsBtn]);
}

function showHomeFeatures() {
  show([chooseFormatHeading, startOverBtn, mtgBtn, rpsBtn]);
}

// PAGES

// home page

function showHomePage() {
  hideGameFeatures();
  showHomeFeatures();
}

// game pages

function rpsGamePage() {
  game.playRps();
  hideHomeFeatures();
  showRpsGameFeatures();
  hide([rpsSelections, whoWon]);
  show([changeFormatBtn]);
}

function mtgGamePage() {
	game.playMtg();
  hideHomeFeatures();
  showMtgGameFeatures();
  hide([mtgSelections, whoWon]);
  show([changeFormatBtn]);
}

// selections pages

function rpsSelectionsPage() {
  hideRpsGameFeatures();
  hideHomeFeatures();
  show([rpsSelections, whoWon]);
  hide([changeFormatBtn]);
  setTimeout(function() {rpsGamePage()}, 1200);
}

function mtgSelectionsPage() {
  hideMtgGameFeatures();
  hideHomeFeatures();
  show([mtgSelections, whoWon]);
  hide([changeFormatBtn]);
  setTimeout(function() {mtgGamePage()}, 1200);
}

// SHOW & HIDE HELPER FUNCTIONS

function hide(elements) {
  for (var i = 0; i < elements.length; i++) {
    element = elements[i];
    element.classList.add("hidden");
  }
}

function show(elements) {
  elements.forEach(element => {
    element.classList.remove("hidden");
  });
}

// LOCAL STORAGE MGMT

function startOverListener() {
  game.startOver();
}