// A player.js file that contains a Player class.
// Player methods must include, but are not limited to:
// saveWinsToStorage
// retrieveWinsFromStorage


class Player {
  constructor(playplay) {
    this.name = playplay.name;
    this.token = playplay.token;
    this.wins = 0;
  }
  saveWinsToStorage() {
    var humanWinsToStorage = game.human[0].wins;
    var computerWinsToStorage = game.computer[0].wins;
    localStorage.setItem("humanWins", JSON.stringify(humanWinsToStorage));
    localStorage.setItem("computerWins", JSON.stringify(computerWinsToStorage));
  }
  retrieveHumanWinsFromStorage() {
    var humanWinsGrab = localStorage.getItem("humanWins");
    humanWins = JSON.parse(humanWinsGrab);
    return humanWinsGrab;
  }

  retrieveComputerWinsFromStorage() {
    var computerWinsGrab = localStorage.getItem("computerWins");
    computerWins = JSON.parse(computerWinsGrab);
    return computerWinsGrab;
  }

}
  // saveWinsToStorage() {
  //   activities.push( -------- )
  //   localStorage.setItem(" -------- ", JSON.stringify( -------- ))
  // }