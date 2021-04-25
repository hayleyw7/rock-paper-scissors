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
    if (this.name === "Human") {
      localstorage.setItem("humanWins", this.wins);
    } else {
      local.storage.setItem("computerWins", this.wins);
    }
  }
  retrieveWinsFromStorage() {
    if (this.name === "Human") {
      localStorage.getItem("humanWins");
    } else {
      localStorage.getItem("computerWins");
    }
  }
}
  // saveWinsToStorage() {
  //   activities.push( -------- )
  //   localStorage.setItem(" -------- ", JSON.stringify( -------- ))
  // }