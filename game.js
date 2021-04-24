// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to reset the Game’s board to begin a new game

class Game {
  constructor(format) {
    this.human = [];
    this.computer = [];
    this.format = format;
    // this.data = data;
  }

  displayFighters() {
  }

  getRandomChoice() {
    if (this.format === "rps") {
      var randomRpsChoice = getRandomIndex(rpsChoices);
      return rpsChoices[randomRpsChoice];
    } else {
      var randomMtgChoice = getRandomIndex(mtgChoices);
      return mtgChoices[randomMtgChoice];
    }
  }

  determineWinner(choice) {
    // RPS WINNER FUNCTION

    if (this.format === "rps") {
      computerScore.innerText = this.computer[0].wins;
      humanScore.innerText = this.human[0].wins;

      var rpsCompChoice = this.getRandomChoice();
      var rpsHumanChoice = choice;

      // tie

      if (rpsHumanChoice === rpsCompChoice) {
        tieAlert();

        // comp throws rock

      } else if (rpsCompChoice === "rock" && rpsHumanChoice === "scissors") {
        rpsButtons.innerHTML = `
          <img id="rpsImgScissors" class="rps-image" src="assets/rps-scissors.png" alt="scissors">
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
        `
        loseAlert();
        // setTimeout(rpsGame(), 2000);
        setTimeout(console.log("TEST"), 2000);

      } else if (rpsCompChoice === "rock" && rpsHumanChoice === "paper") {
        rpsButtons.innerHTML = `
          <img id="rpsImgPaper" class="rps-image" src="assets/rps-paper.png" alt="paper">
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
        `
        winAlert();
        // setTimeout(rpsGame(), 2000);
        setTimeout(console.log("TEST"), 2000);

        // comp throws paper

      } else if (rpsCompChoice === "paper" && rpsHumanChoice === "scissors") {
        rpsButtons.innerHTML = `
          <img id="rpsImgScissors" class="rps-image" src="assets/rps-scissors.png" alt="scissors">
          <img id="rpsImgPaper" class="rps-image" src="assets/rps-paper.png" alt="paper">
        `
        winAlert();
        // setTimeout(rpsGame(), 2000);
        setTimeout(console.log("TEST"), 2000);

      } else if (rpsCompChoice === "paper" && rpsHumanChoice === "rock") {
        rpsButtons.innerHTML = `
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
          <img id="rpsImgPaper" class="rps-image" src="assets/rps-paper.png" alt="paper">
        `
        loseAlert();
        // setTimeout(rpsGame(), 2000);
        setTimeout(console.log("TEST"), 2000);

        // comp throws scissors

      } else if (rpsCompChoice === "scissors" && rpsHumanChoice === "rock") {
        rpsButtons.innerHTML = `
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
          <img id="rpsImgScissors" class="rps-image" src="assets/rps-scissors.png" alt="scissors">
        `
        // setTimeout(rpsGame(), 2000);
        setTimeout(console.log("TEST"), 2000);
        
      } else if (rpsCompChoice === "scissors" && rpsHumanChoice === "paper") {
        rpsButtons.innerHTML = `
          <img id="rpsImgPaper" class="rps-image" src="assets/rps-paper.png" alt="paper">
          <img id="rpsImgScissors" class="rps-image" src="assets/rps-scissors.png" alt="scissors">
        `
        loseAlert();
        // setTimeout(rpsGame(), 2000);
        setTimeout(console.log("TEST"), 2000);
      }
    } else {

      // MTG WINNER FUNCTION

      computerScore.innerText = this.computer[0].wins;
      humanScore.innerText = this.human[0].wins;

      var mtgCompChoice = getRandomChoice();
      var mtgHumanChoice = choice;

      // tie

      if (mtgHumanChoice === mtgCompChoice) {
        tieAlert();

        // comp throws rock

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "scissors") {
        loseAlert();

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "paper") {
        winAlert();

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "lizard") {
        loseAlert();

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "alien") {
        winAlert();

        // comp throws paper

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "scissors") {
        winAlert();

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "rock") {
        loseAlert();

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "lizard") {
        winAlert();

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "alien") {
        loseAlert();

        // comp throws scissors

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "rock") {
        winAlert();

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "paper") {
        loseAlert();

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "lizard") {
        loseAlert();

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "alien") {
        winAlert();

        // comp throws lizard

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "rock") {
        winAlert();

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "paper") {
        loseAlert();

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "scissors") {
        winAlert();

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "alien") {
        loseAlert();

        // comp throws alien

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "paper") {
        winAlert();

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "rock") {
        loseAlert();

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "lizard") {
        winAlert();

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "scissors") {
        loseAlert();
      }
    }
  }
  resetGame() {
    this.human[0].wins = 0;
    this.computer[0].wins = 0;
  }
}