class Player {
  constructor(playplay) {
    this.name = playplay.name;
    this.token = playplay.token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    let humanWinsToStorage = game.human.wins;
    let computerWinsToStorage = game.computer.wins;
    localStorage.setItem('humanWins', JSON.stringify(humanWinsToStorage));
    localStorage.setItem('computerWins', JSON.stringify(computerWinsToStorage));
    localStorage.setItem('humanWins', humanWinsToStorage);
    localStorage.setItem('computerWins', computerWinsToStorage);
  }

  retrieveWinsFromStorage(playerWins) {
    let winsGrab = localStorage.getItem(playerWins);
    let wins = JSON.parse(winsGrab);
    this.wins = wins;
    return wins;
  }
}
