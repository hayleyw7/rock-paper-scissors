// A main.js file that contains all DOM related JavaScript

// QUERY SELECTORS

// headings

var chooseFormatHeading = document.querySelector("#chooseFormatHeading")

var mtgHeading = document.querySelector("#mtgHeading")

var rpsHeading = document.querySelector("#rpsHeading")

// images

var rpsImg = document.querySelector("#rpsImg");
var mtgImg = document.querySelector("#mtgImg");

// buttons

var changeFormatBtn = document.querySelector("#changeFormat")

var rpsBtn = document.querySelector("#rpsBtn")
var mtgBtn = document.querySelector("#mtgBtn")

// EVENT LISTENERS

// buttons

changeFormatBtn.addEventListener("click", showHome)
rpsBtn.addEventListener("click", rpsGame)
mtgBtn.addEventListener("click", mtgGame)

// FUNCTIONS

function rpsGame() {
  hideHome();
  hide(mtgHeading);
  hide(mtgImg);
  show(rpsImg);
  show(rpsHeading);
}

function mtgGame() {
  hideHome();
  hide(rpsImg);
  hide(rpsHeading);
  show(mtgHeading);
  show(mtgImg);
}

function showHome() {
  hide(mtgHeading);
  hide(mtgImg);
  hide(rpsImg);
  hide(rpsHeading);
  show(chooseFormatHeading);
  show(mtgBtn);
  show(rpsBtn);
}

// helper functions

function hide(e) {
  e.classList.add("hidden")
}

function show(e) {
  e.classList.remove("hidden")
}

function hideHome() {
  preventDefault();
  hide(chooseFormatHeading);
  hide(mtgBtn);
  hide(rpsBtn);
}

function preventDefault() {
  event.preventDefault();
}