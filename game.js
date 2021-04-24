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

  displayChoices() {
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

    if (this.type === "rps") {
      computerScore.innerText = this.computer.wins;
      humanScore.innerText = this.human.wins;

      var rpsCompChoice = this.getRandomChoice();
      var rpsHumanChoice = choice;

      // tie

      if (rpsHumanChoice === rpsCompChoice) {
        tieAlert();

        // comp throws rock

      } else if (rpsCompChoice === "rock" && rpsHumanChoice === "scissors") {
        this.computer[0].wins++;
        loseAlert();
      } else if (rpsCompChoice === "rock" && rpsHumanChoice === "paper") {
        this.human[0].wins++;
        winAlert();

        // comp throws paper

      } else if (rpsCompChoice === "paper" && rpsHumanChoice === "scissors") {
        this.human[0].wins++;
        winAlert();
      } else if (rpsCompChoice === "paper" && rpsHumanChoice === "rock") {
        this.computer[0].wins++;
        loseAlert();
        
        // comp throws scissors

      } else if (rpsCompChoice === "scissors" && rpsHumanChoice === "rock") {
        this.human[0].wins++;
        winAlert();
      } else if (rpsCompChoice === "scissors" && rpsHumanChoice === "paper") {
        this.computer[0].wins++;
        loseAlert();
      }
    } else {

      // MTG WINNER FUNCTION

      computerScore.innerText = this.omputer.wins;
      humanScore.innerText = this.human.wins;

      var mtgCompChoice = getRandomChoice();
      var mtgHumanChoice = choice;

      // tie

      if (mtgHumanChoice === mtgCompChoice) {
        tieAlert();

        // comp throws rock
      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "scissors") {
        this.computer[0].wins++;
        loseAlert();
      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "paper") {
        this.human[0].wins++;
        winAlert();
      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "lizard") {
        this.computer[0].wins++;
        loseAlert();
      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "alien") {
        this.human[0].wins++;
        winAlert();

        // comp throws paper
      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "scissors") {
        this.human[0].wins++;
        winAlert();
      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "rock") {
        this.computer[0].wins++;
        loseAlert();
      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "lizard") {
        this.human[0].wins++;
        winAlert();
      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "alien") {
        this.computer[0].wins++;
        loseAlert();

        // comp throws scissors
      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "rock") {
        this.human[0].wins++;
        winAlert();
      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "paper") {
        this.computer[0].wins++;
        loseAlert();
      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "lizard") {
        this.computer[0].wins++;
        loseAlert();
      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "alien") {
        this.human[0].wins++;
        winAlert();

        // comp throws lizard
      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "rock") {
        this.human[0].wins++;
        winAlert();
      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "paper") {
        this.computer[0].wins++;
        loseAlert();
      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "scissors") {
        this.human.wins++;
        winAlert();
      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "alien") {
        this.computer[0].wins++;
        loseAlert();

        // comp throws alien

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "paper") {
        this.human[0].wins++;
        winAlert();
      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "rock") {
        this.computer[0].wins++;
        loseAlert();
      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "lizard") {
        this.human[0].wins++;
        winAlert();
      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "scissors") {
        this.computer[0].wins++;
        loseAlert();
      }
    }
  }
  resetGame() {
    this.human[0].wins = 0;
    this.computer[0].wins = 0;
  }
}