// A main.js file that contains all DOM related JavaScript

// QUERY SELECTORS

// headings

var chooseFormatHeading = document.querySelector("#chooseFormatHeading")
var mtgHeading = document.querySelector("#mtgHeading")
var rpsHeading = document.querySelector("#rpsHeading")

// images

var rpsImgRock = document.querySelector("#rpsImgRock");
var rpsImgPaper = document.querySelector("#rpsImgPaper");
var rpsImgScissors = document.querySelector("#rpsImgScissors");
var mtgImgRock = document.querySelector("#mtgImgRock");
var mtgImgPaper = document.querySelector("#mtgImgPaper");
var mtgImgScissors = document.querySelector("#mtgImgScissors");
var mtgImgLizard = document.querySelector("#mtgImgLizard");
var mtgImgAlien = document.querySelector("#mtgImgAlien");

// buttons

var changeFormatBtn = document.querySelector("#changeFormat")
var rpsBtn = document.querySelector("#rpsBtn")
var mtgBtn = document.querySelector("#mtgBtn")

// EVENT LISTENERS

// buttons

// changeFormatBtn.addEventListener("click", showHome)
rpsBtn.addEventListener("click", rpsGame)
mtgBtn.addEventListener("click", mtgGame)

// FUNCTIONS

// helper functions

function hide(e) {
  e.classList.add("hidden")
}

function show(e) {
  e.classList.remove("hidden")
}

// function showHome() {
//   hide(mtgHeading);
//   hide(mtgImgRock);
//   hide(mtgImgPaper);
//   hide(mtgImgScissors);
//   hide(mtgImgAlien);
//   hide(mtgImgLizard);
//   hide(rpsHeading);
//   show(chooseFormatHeading);
//   show(mtgBtn);
//   show(rpsBtn);
// }

function hideHome() {
  hide(chooseFormatHeading);
  hide(mtgBtn);
  hide(rpsBtn);
}

// big functions

function rpsGame() {
  hideHome();s
  show(rpsImgRock);
  show(rpsImgPaper);
  show(rpsImgScissors);
  show(rpsImgLizard);
  show(rpsImgAlien);
  show(rpsHeading);
}

function mtgGame() {
  hideHome();
  show(mtgHeading);
  show(mtgImgRock);
  show(mtgImgPaper);
  show(mtgImgScissors);
  show(mtgImgLizard);
  show(mtgImgAlien);
}