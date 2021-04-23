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
  determineWinner() {
    // if human won, they get a point
    // else if pc won, they get a point
    // else no points (draw)
  }
  resetGame() {
  }
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

module.exports = Game;