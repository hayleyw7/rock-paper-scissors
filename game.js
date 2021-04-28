class Game {
  constructor() {
    this.human = new Player({ name: "Human", token: "💀" });
    this.computer = new Player({ name: "Computer", token: "🤖" });
    this.type = "";
  }

// PLAY GAME

  playRps() {
    this.type = "rps";
  }

  playMtg() {
    this.type = "mtg";
  }

// RANDOMIZERS

  getRandomIndex(array) {
    return Math.floor(Math.random()*array.length);
  };

  getRandomChoice() {
    if (this.type === "rps") {
      var randomRpsChoice = this.getRandomIndex(rpsChoices);
      return rpsChoices[randomRpsChoice];
    } else {
      var randomMtgChoice = this.getRandomIndex(mtgChoices);
      return mtgChoices[randomMtgChoice];
    }
  }

// WHO WON?

  determineWinner(choice) {

// rps winner

    if (this.type === "rps") {

      var rpsCompChoice = this.getRandomChoice();
      var rpsHumanChoice = choice;

      rpsSelections.innerHTML = `
        <img class="rps-image-selection" src="assets/rps-${rpsHumanChoice}.png" alt="${rpsHumanChoice}">
        <img class="rps-image-selection" src="assets/rps-${rpsCompChoice}.png" alt="${rpsCompChoice}">
      `

      if ( (rpsCompChoice === "rock" && rpsHumanChoice === "rock")
        || (rpsCompChoice === "paper" && rpsHumanChoice === "paper")
        || (rpsCompChoice === "scissors" && rpsHumanChoice === "scissors") ) {

        this.tieAlert();

      } else if ( (rpsCompChoice === "paper" && rpsHumanChoice === "rock")
        || (rpsCompChoice === "scissors" && rpsHumanChoice === "paper")
        || (rpsCompChoice === "rock" && rpsHumanChoice === "scissors") ) {

        this.loseAlert();

      } else {

        this.winAlert();
      }

    } else {

// mtg winner

      computerScore.innerText = this.computer.wins;
      humanScore.innerText = this.human.wins;

      var mtgCompChoice = this.getRandomChoice();
      var mtgHumanChoice = choice;

      mtgSelections.innerHTML = `
        <img class="mtg-image-selection" src="assets/mtg-${mtgHumanChoice}.jpeg" alt="${mtgHumanChoice}">
        <img class="mtg-image-selection" src="assets/mtg-${mtgCompChoice}.jpeg" alt="${mtgCompChoice}">
      `

      if ( (mtgCompChoice === "rock" && mtgHumanChoice === "rock")
        || (mtgCompChoice === "paper" && mtgHumanChoice === "paper")
        || (mtgCompChoice === "scissors" && mtgHumanChoice === "scissors")
        || (mtgCompChoice === "lizard" && mtgHumanChoice === "lizard")
        || (mtgCompChoice === "alien" && mtgHumanChoice === "alien") ) {

        this.tieAlert();

      } else if ( (mtgCompChoice === "rock" && mtgHumanChoice === "lizard")
        || (mtgCompChoice === "rock" && mtgHumanChoice === "scissors")
        || (mtgCompChoice === "paper" && mtgHumanChoice === "scissors")
        || (mtgCompChoice === "paper" && mtgHumanChoice === "alien")
        || (mtgCompChoice === "scissors" && mtgHumanChoice === "paper")
        || (mtgCompChoice === "scissors" && mtgHumanChoice === "lizard")
        || (mtgCompChoice === "lizard" && mtgHumanChoice === "paper")
        || (mtgCompChoice === "lizard" && mtgHumanChoice === "alien")
        || (mtgCompChoice === "alien" && mtgHumanChoice === "rock")
        || (mtgCompChoice === "alien" && mtgHumanChoice === "scissors") ) {

        this.loseAlert();

      } else {

        this.winAlert();

      }
    }
  }

  // TIE/WIN/LOSE ALERTS

  winAlert() {
    this.human.wins++;
    humanScore.innerText = this.human.wins;
    if (this.type === "rps") {
      rpsSelectionsPage();
    } else {
      mtgSelectionsPage();
    }
    whoWon.innerText = "Construct Defeated";
    this.human.saveWinsToStorage();
    this.computer.saveWinsToStorage();
  }

  loseAlert() {
    this.computer.wins++;
    computerScore.innerText = this.computer.wins;
    whoWon.innerText = "Planeswalker Defeated";
    if (this.type === "rps") {
      rpsSelectionsPage();
    } else {
      mtgSelectionsPage();
    }
    this.human.saveWinsToStorage();
    this.computer.saveWinsToStorage();
  }

  tieAlert() {
    whoWon.innerText = "Evenly Matched";
    if (this.type === "rps") {
      rpsSelectionsPage();
    } else {
      mtgSelectionsPage();
    }
  }

// LOCAL STORAGE

// initiate

  initializeLocalStorage() {
    if (localStorage.humanWins === undefined) {
      localStorage.humanWins = 0;
    } else {
      humanScore.innerText = game.human.retrieveWinsFromStorage("humanWins");
    }
    
    if (localStorage.computerWins === undefined) {
      localStorage.computerWins = 0;
    } else {
      computerScore.innerText = game.computer.retrieveWinsFromStorage("computerWins");
    }
  }

// start over

  startOver() {
    computerScore.innerText = `0`;
    humanScore.innerText = `0`;
    this.human.wins = 0;
    this.computer.wins = 0;
    localStorage.clear();
  }
}