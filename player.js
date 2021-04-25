class Player {
  constructor(playplay) {
    this.name = playplay.name;
    this.token = playplay.token;
    this.wins = 0;
  }
  saveWinsToStorage() {
    var humanWinsToStorage = game.human.wins;
    var computerWinsToStorage = game.computer.wins;
    localStorage.setItem("humanWins", JSON.stringify(humanWinsToStorage));
    localStorage.setItem("computerWins", JSON.stringify(computerWinsToStorage));
    localStorage.setItem("humanWins", humanWinsToStorage);
    localStorage.setItem("computerWins", computerWinsToStorage);
  }
  retrieveHumanWinsFromStorage() {
    var humanWinsGrab = localStorage.getItem("humanWins");
    var humanWins = JSON.parse(humanWinsGrab);
    this.wins = humanWins;
    return humanWins;
  }
  retrieveComputerWinsFromStorage() {
    var computerWinsGrab = localStorage.getItem("computerWins");
    var computerWins = JSON.parse(computerWinsGrab);
    this.wins = computerWins;
    return computerWins;
  }
}
