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

  retrieveWinsFromStorage(playerWins) {
    var winsGrab = localStorage.getItem(playerWins);
    var wins = JSON.parse(winsGrab);
    this.wins = wins;
    return wins;
  }
}
