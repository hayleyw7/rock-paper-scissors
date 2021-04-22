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

// EVENT LISTENERS

// buttons

changeFormatBtn.addEventListener("click", showHome);
rpsBtn.addEventListener("click", rpsGame);
mtgBtn.addEventListener("click", mtgGame);

// images

rpsImgRock.addEventListener("click", showAlert);
rpsImgPaper.addEventListener("click", showAlert);
rpsImgScissors.addEventListener("click", showAlert);
mtgImgScissors.addEventListener("click", showAlert);
mtgImgRock.addEventListener("click", showAlert);
mtgImgPaper.addEventListener("click", showAlert);
mtgImgAlien.addEventListener("click", showAlert);
mtgImgLizard.addEventListener("click", showAlert);

// FUNCTIONS

// randomizer

function s(array) {
  return Math.floor(Math.random()*array.length);
};

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

  function showAlert() {
    alert ("Hello world!");
  }
