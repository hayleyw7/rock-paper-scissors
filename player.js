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
      localstorage.setItem();
    } else {
      local.storage.setItem();
    }
  }
  retrieveWinsFromStorage() {
    if (this.name === "Human") {
      localStorage.getItem();
    } else {
      localStorage.getItem();
    }
  }
}
  // saveWinsToStorage() {
  //   activities.push( -------- )
  //   localStorage.setItem(" -------- ", JSON.stringify( -------- ))
  // }