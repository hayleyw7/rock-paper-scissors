// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game

class Game {
  constructor(human, computer, type) {
    this.human = human;
    this.computer = computer;
    this.type = type;
    // this.data = data;
    // this.format = format;
    // this.turn = turn;
  }
  // constructor(human, computer) {
  //   this.data = data;
  //   this.format = format;
  //   this.turn = turn;
  // }
  determineWinner(choice) {
    // RPS WINNER FUNCTION

    if (this.type === "rps") {
      computerScore.innerText = computer.wins;
      humanScore.innerText = human.wins;

      var rpsCompChoice = getRandomRpsChoice();
      var rpsHumanChoice = choice;

      // tie

      if (rpsHumanChoice === rpsCompChoice) {
        tieAlert();

        // comp throws rock
      } else if (rpsCompChoice === "rock" && rpsHumanChoice === "scissors") {
        loseAlert();
        computer.wins++;
      } else if (rpsCompChoice === "rock" && rpsHumanChoice === "paper") {
        winAlert();

        // comp throws paper
      } else if (rpsCompChoice === "paper" && rpsHumanChoice === "scissors") {
        winAlert();
        human.wins++;
      } else if (rpsCompChoice === "paper" && rpsHumanChoice === "rock") {
        loseAlert();
        computer.wins++;

        // comp throws scissors
      } else if (rpsCompChoice === "scissors" && rpsHumanChoice === "rock") {
        winAlert();
        human.wins++;
      } else if (rpsCompChoice === "scissors" && rpsHumanChoice === "paper") {
        loseAlert();
        computer.wins++;
      }
    } else {
      // MTG WINNER FUNCTION

      computerScore.innerText = computer.wins;
      humanScore.innerText = human.wins;

      var mtgCompChoice = getRandomMtgChoice();
      var mtgHumanChoice = choice;

      // tie

      if (mtgHumanChoice === mtgCompChoice) {
        tieAlert();

        // comp throws rock
      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "scissors") {
        computer.wins++;
        loseAlert();
      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "paper") {
        human.wins++;
        winAlert();
      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "lizard") {
        computer.wins++;
        loseAlert();
      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "alien") {
        human.wins++;
        winAlert();

        // comp throws paper
      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "scissors") {
        human.wins++;
        winAlert();
      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "rock") {
        computer.wins++;
        loseAlert();
      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "lizard") {
        human.wins++;
        winAlert();
      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "alien") {
        computer.wins++;
        loseAlert();

        // comp throws scissors
      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "rock") {
        human.wins++;
        winAlert();
      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "paper") {
        computer.wins++;
        loseAlert();
      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "lizard") {
        computer.wins++;
        loseAlert();
      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "alien") {
        human.wins++;
        winAlert();

        // comp throws lizard
      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "rock") {
        human.wins++;
        winAlert();
      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "paper") {
        computer.wins++;
        loseAlert();
      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "scissors") {
        human.wins++;
        winAlert();
      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "alien") {
        computer.wins++;
        loseAlert();

        // comp throws alien
      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "paper") {
        human.wins++;
        winAlert();
      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "rock") {
        computer.wins++;
        loseAlert();
      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "lizard") {
        human.wins++;
        winAlert();
      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "scissors") {
        computer.wins++;
        loseAlert();
      }
    }
  }
  resetGame() {}
}

// class Game {
//   constructor(name, token, wins) {
//     this.data = data;
//     this.format = format;
//     this.turn = turn;
//   }
//   determineWinner() {
//     // if human won, they get a point
//     // else if pc won, they get a point
//     // else no points (draw)
//   }
//   resetGame() {
//   }
// }

// var testInstance = new Game();
