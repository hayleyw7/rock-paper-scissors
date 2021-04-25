// A Game should include:
// A way to reset the Game’s board to begin a new game

class Game {
  constructor(format) {
    this.human = [];
    this.computer = [];
    this.format = format;
  }

// RANDOMIZERS

  getRandomIndex(array) {
    return Math.floor(Math.random()*array.length);
  };

  getRandomChoice() {
    if (this.format === "rps") {
      var randomRpsChoice = this.getRandomIndex(rpsChoices);
      return rpsChoices[randomRpsChoice];
    } else {
      var randomMtgChoice = this.getRandomIndex(mtgChoices);
      return mtgChoices[randomMtgChoice];
    }
  }

  // SHOW 2 FIGHTERS

  // displayFighters() {
  // }

  // WHO WON

  determineWinner(choice) {
    // RPS WINNER FUNCTION

    if (this.format === "rps") {
      // computerScore.innerText = this.computer[0].wins;
      // humanScore.innerText = this.human[0].wins;

      var rpsCompChoice = this.getRandomChoice();
      var rpsHumanChoice = choice;

        // comp throws rock

      if (rpsCompChoice === "rock" && rpsHumanChoice === "rock") {
        rpsSelections.innerHTML = `
          <img class="rps-image" src="assets/rps-rock.png" alt="rock">
          <img class="rps-image" src="assets/rps-rock.png" alt="rock">
        `
        this.tieAlert();

      } else if (rpsCompChoice === "rock" && rpsHumanChoice === "scissors") {
        rpsSelections.innerHTML = `
          <img class="rps-image" src="assets/rps-scissors.png" alt="scissors">
          <img class="rps-image" src="assets/rps-rock.png" alt="rock">
        `
        this.loseAlert();

      } else if (rpsCompChoice === "rock" && rpsHumanChoice === "paper") {
        rpsSelections.innerHTML = `
          <img class="rps-image" src="assets/rps-paper.png" alt="paper">
          <img class="rps-image" src="assets/rps-rock.png" alt="rock">
        `
        this.winAlert();

        // comp throws paper

      } else if (rpsCompChoice === "paper" && rpsHumanChoice === "paper") {
        rpsSelections.innerHTML = `
          <img class="rps-image" src="assets/rps-paper.png" alt="paper">
          <img class="rps-image" src="assets/rps-paper.png" alt="paper">
        `
        this.tieAlert();

      } else if (rpsCompChoice === "paper" && rpsHumanChoice === "scissors") {
        rpsSelections.innerHTML = `
          <img class="rps-image" src="assets/rps-scissors.png" alt="scissors">
          <img class="rps-image" src="assets/rps-paper.png" alt="paper">
        `
       this.winAlert();

      } else if (rpsCompChoice === "paper" && rpsHumanChoice === "rock") {
        rpsSelections.innerHTML = `
          <img class="rps-image" src="assets/rps-rock.png" alt="rock">
          <img class="rps-image" src="assets/rps-paper.png" alt="paper">
        `
        this.loseAlert();

        // comp throws scissors

      } else if (rpsCompChoice === "scissors" && rpsHumanChoice === "scissors") {
        rpsSelections.innerHTML = `
          <img class="rps-image" src="assets/rps-scissors.png" alt="scissors">
          <img class="rps-image" src="assets/rps-scissors.png" alt="scissors">
        `
        this.tieAlert();

      } else if (rpsCompChoice === "scissors" && rpsHumanChoice === "rock") {
        rpsSelections.innerHTML = `
          <img class="rps-image" src="assets/rps-rock.png" alt="rock">
          <img class="rps-image" src="assets/rps-scissors.png" alt="scissors">
        `
        this.winAlert();

      } else if (rpsCompChoice === "scissors" && rpsHumanChoice === "paper") {
        rpsSelections.innerHTML = `
          <img class="rps-image" src="assets/rps-paper.png" alt="paper">
          <img class="rps-image" src="assets/rps-scissors.png" alt="scissors">
        `
        this.loseAlert();
      }
    } else {

      // MTG WINNER FUNCTION

      computerScore.innerText = this.computer[0].wins;
      humanScore.innerText = this.human[0].wins;

      var mtgCompChoice = this.getRandomChoice();
      var mtgHumanChoice = choice;

      // comp throws rock

      if (mtgCompChoice === "rock" && mtgHumanChoice === "rock") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-rock.jpeg" alt="rock">
          <img class="mtg-image" src="assets/mtg-rock.jpeg" alt="rock">
        `
        this.tieAlert();

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "scissors") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-scissors.jpeg" alt="scissors">
          <img class="mtg-image" src="assets/mtg-rock.jpeg" alt="rock">
        `
        this.loseAlert();

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "paper") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-paper.jpeg" alt="paper">
          <img class="mtg-image" src="assets/mtg-rock.jpeg" alt="rock">
        `
        this.winAlert();

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "lizard") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-lizard.jpeg" alt="lizard">
          <img class="mtg-image" src="assets/mtg-rock.jpeg" alt="rock">
        `
        this.loseAlert();

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "alien") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-alien.jpeg" alt="alien">
          <img class="mtg-image" src="assets/mtg-rock.jpeg" alt="rock">
        `
        this.winAlert();

        // comp throws paper

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "paper") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-paper.jpeg" alt="paper">
          <img class="mtg-image" src="assets/mtg-paper.jpeg" alt="paper">
        `
        this.tieAlert();

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "scissors") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-scissors.jpeg" alt="scissors">
          <img class="mtg-image" src="assets/mtg-paper.jpeg" alt="paper">
        `
        this.winAlert();

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "rock") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-rock.jpeg" alt="rock">
          <img class="mtg-image" src="assets/mtg-paper.jpeg" alt="paper">
        `
        this.loseAlert();

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "lizard") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-lizard.jpeg" alt="lizard">
          <img class="mtg-image" src="assets/mtg-paper.jpeg" alt="paper">
        `
        this.winAlert();

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "alien") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-alien.jpeg" alt="alien">
          <img ilass="mtg-image" src="assets/mtg-paper.jpeg" alt="paper">
        `
        this.loseAlert();

        // comp throws scissors

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "scissors") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-scissors.jpeg" alt="scissors">
          <img class="mtg-image" src="assets/mtg-scissors.jpeg" alt="scissors">
        `
        this.tieAlert();

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "rock") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-rock.jpeg" alt="rock">
          <img class="mtg-image" src="assets/mtg-scissors.jpeg" alt="scissors">
        `
        this.winAlert();

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "paper") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-paper.jpeg" alt="paper">
          <img class="mtg-image" src="assets/mtg-scissors.jpeg" alt="scissors">
        `
        this.loseAlert();

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "lizard") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-lizard.jpeg" alt="lizard">
          <img class="mtg-image" src="assets/mtg-scissors.jpeg" alt="scissors">
        `
        this.loseAlert();

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "alien") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-alien.jpeg" alt="alien">
          <img class="mtg-image" src="assets/mtg-scissors.jpeg" alt="scissors">
        `
        this.winAlert();

        // comp throws lizard

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "lizard") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-lizard.jpeg" alt="lizard">
          <img class="mtg-image" src="assets/mtg-lizard.jpeg" alt="lizard">
        `
        this.tieAlert();

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "rock") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-lizard.jpeg" alt="lizard">4
          <img class="mtg-image" src="assets/mtg-rock.jpeg" alt="rock">
        `
        this.winAlert();

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "paper") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-paper.jpeg" alt="paper">
          <img class="mtg-image" src="assets/mtg-lizard.jpeg" alt="lizard">
        `
        this.loseAlert();

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "scissors") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-scissors.jpeg" alt="scissors">
          <img class="mtg-image" src="assets/mtg-lizard.jpeg" alt="lizard">
        `
        this.winAlert();

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "alien") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-alien.jpeg" alt="alien">
          <img class="mtg-image" src="assets/mtg-lizard.jpeg" alt="lizard">
        `
        this.loseAlert();

        // comp throws alien

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "alien") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-alien.jpeg" alt="alien">
          <img class="mtg-image" src="assets/mtg-alien.jpeg" alt="alien">
        `
        this.tieAlert();

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "paper") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-paper.jpeg" alt="paper">
          <img class="mtg-image" src="assets/mtg-alien.jpeg" alt="alien">
        `
        this.winAlert();

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "rock") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-rock.jpeg" alt="rock">
          <img class="mtg-image" src="assets/mtg-alien.jpeg" alt="alien">
        `
        this.loseAlert();

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "lizard") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-lizard.jpeg" alt="lizard">
          <img class="mtg-image" src="assets/mtg-alien.jpeg" alt="alien">
        `
        this.winAlert();

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "scissors") {
        mtgSelections.innerHTML = `
          <img class="mtg-image" src="assets/mtg-scissors.jpeg" alt="scissors">
          <img class="mtg-image" src="assets/mtg-alien.jpeg" alt="alien">
        `
        this.loseAlert();
      }
    }
  }

  // TIE/WIN/LOSE ALERTS

  winAlert() {
    this.human[0].wins++;
    // humanScore.innerText = this.human[0].retrieveHumanWinsFromStorage();
    humanScore.innerText = this.human[0].wins;
    if (this.format === "rps") {
      rpsSelectionsPage();
    } else {
      mtgSelectionsPage();
    }
    whoWon.innerText = "Construct defeated";
    this.human[0].saveWinsToStorage();
    this.computer[0].saveWinsToStorage();
  }
  loseAlert() {
    this.computer[0].wins++;
    // computerScore.innerText = this.computer[0].retrieveComputerWinsFromStorage();
    computerScore.innerText = this.computer[0].wins;
    whoWon.innerText = "Planeswalker defeated";
    if (this.format === "rps") {
      rpsSelectionsPage();
    } else {
      mtgSelectionsPage();
    }
    this.human[0].saveWinsToStorage();
    this.computer[0].saveWinsToStorage();
  }
  tieAlert() {
    whoWon.innerText = "Evenly matched";
    if (this.format === "rps") {
      rpsSelectionsPage();
    } else {
      mtgSelectionsPage();
    }
  }

  // RESET SCORES

  // resetGame() {
  //   this.human[0].wins = 0;
  //   this.computer[0].wins = 0;
  // }
}
