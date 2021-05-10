// ***** REQUIREMENTS *****

// const assert = require('chai').assert;
// const gameReq = require('game.js');
// const playerReq = require('player.js');
// const dataReq = require('data.js');

// ***** QUERY SELECTORS *****

// HEADINGS

const chooseFormatHeading = document.querySelector('#chooseFormatHeading');
const mtgHeading = document.querySelector('#mtgHeading');
const rpsHeading = document.querySelector('#rpsHeading');
const whoWon = document.querySelector('#whoWon');

// IMAGES

// rps images

const rpsImgRock = document.querySelector('#rpsImgRock');
const rpsImgPaper = document.querySelector('#rpsImgPaper');
const rpsImgScissors = document.querySelector('#rpsImgScissors');

// mtg images

const mtgImgRock = document.querySelector('#mtgImgRock');
const mtgImgPaper = document.querySelector('#mtgImgPaper');
const mtgImgScissors = document.querySelector('#mtgImgScissors');
const mtgImgLizard = document.querySelector('#mtgImgLizard');
const mtgImgAlien = document.querySelector('#mtgImgAlien');

// BUTTONS

const changeFormatBtn = document.querySelector('#changeFormatBtn');
const startOverBtn = document.querySelector('#startOverBtn');
const rpsBtn = document.querySelector('#rpsBtn');
const mtgBtn = document.querySelector('#mtgBtn');

// SELECTIONS

const rpsSelections = document.querySelector('#rpsSelections');
const mtgSelections = document.querySelector('#mtgSelections');

// SCORES

const humanScore = document.querySelector('#humanScore');
const computerScore = document.querySelector('#computerScore');

// ***** GAME SETUP *****

const game = new Game();
game.initializeLocalStorage();

// ***** EVENT LISTENERS *****

// BUTTONS

changeFormatBtn.addEventListener('click', showHomePage);
startOverBtn.addEventListener('click', startOverListener);
rpsBtn.addEventListener('click', rpsGamePage);
mtgBtn.addEventListener('click', mtgGamePage);

// IMAGES

// rps images

rpsImgRock.addEventListener('click', rpsHumanChoiceRock);
rpsImgPaper.addEventListener('click', rpsHumanChoicePaper);
rpsImgScissors.addEventListener('click', rpsHumanChoiceScissors);

// mtg images

mtgImgRock.addEventListener('click', mtgHumanChoiceRock);
mtgImgScissors.addEventListener('click', mtgHumanChoiceScissors);
mtgImgPaper.addEventListener('click', mtgHumanChoicePaper);
mtgImgLizard.addEventListener('click', mtgHumanChoiceLizard);
mtgImgAlien.addEventListener('click', mtgHumanChoiceAlien);

// ***** FUNCTIONS *****

// * HUMAN SELECTIONS *

// RPS HUMAN SELECTIONS

function rpsHumanChoiceRock() {
  game.determineWinner('rock');
}

function rpsHumanChoicePaper() {
  game.determineWinner('paper');
}

function rpsHumanChoiceScissors() {
  game.determineWinner('scissors');
}

// MTG HUMAN SELECTIONS

function mtgHumanChoiceRock() {
  game.determineWinner('rock');
}

function mtgHumanChoicePaper() {
  game.determineWinner('paper');
}

function mtgHumanChoiceScissors() {
  game.determineWinner('scissors');
}

function mtgHumanChoiceLizard() {
  game.determineWinner('lizard');
}

function mtgHumanChoiceAlien() {
  game.determineWinner('alien');
}

// SHOW & HIDE HELPER FUNCTIONS

function hide(elements) {
  elements.forEach(element => {
    element.classList.add('hidden');
  });
}

function show(elements) {
  elements.forEach(element => {
    element.classList.remove('hidden');
  });
}

// * HIDE & SHOW ELEMENTS *

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
  setTimeout(function () { rpsGamePage(); }, 1200);
}

function mtgSelectionsPage() {
  hideMtgGameFeatures();
  hideHomeFeatures();
  show([mtgSelections, whoWon]);
  hide([changeFormatBtn]);
  setTimeout(function () { mtgGamePage(); }, 1200);
}

// LOCAL STORAGE MGMT

function startOverListener() {
  game.startOver();
}
