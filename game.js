// A Game should include:
// A way to reset the Game’s board to begin a new game

class Game {
  constructor(format) {
    this.human = [];
    this.computer = [];
    this.format = format;
  }

  displayFighters() {
  }

// RANDOMIZER

  getRandomIndex(array) {
    return Math.floor(Math.random()*array.length);
  };

  getRandomChoice() {
    if (this.format === "rps") {
      var randomRpsChoice = this.getRandomIndex(rpsChoices);
      return rpsChoices[randomRpsChoice];
    } else {
      var randomMtgChoice = this.getRandomIndex(mtgChoices);
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

        // comp throws rock

      if (rpsCompChoice === "rock" && rpsHumanChoice === "rock") {
        choicesChosen.innerHTML = `
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
        `
        this.tieAlert();

      } else if (rpsCompChoice === "rock" && rpsHumanChoice === "scissors") {
        choicesChosen.innerHTML = `
          <img id="rpsImgScissors" class="rps-image" src="assets/rps-scissors.png" alt="scissors">
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
        `
        this.loseAlert();

      } else if (rpsCompChoice === "rock" && rpsHumanChoice === "paper") {
        choicesChosen.innerHTML = `
          <img id="rpsImgPaper" class="rps-image" src="assets/rps-paper.png" alt="paper">
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
        `
        this.winAlert();

        // comp throws paper

      } else if (rpsCompChoice === "paper" && rpsHumanChoice === "paper") {
        choicesChosen.innerHTML = `
          <img id="rpsImgPaper" class="rps-image" src="assets/rps-paper.png" alt="paper">
          <img id="rpsImgPaper" class="rps-image" src="assets/rps-paper.png" alt="paper">
        `
        this.tieAlert();

      } else if (rpsCompChoice === "paper" && rpsHumanChoice === "scissors") {
        choicesChosen.innerHTML = `
          <img id="rpsImgScissors" class="rps-image" src="assets/rps-scissors.png" alt="scissors">
          <img id="rpsImgPaper" class="rps-image" src="assets/rps-paper.png" alt="paper">
        `
       this.winAlert();

      } else if (rpsCompChoice === "paper" && rpsHumanChoice === "rock") {
        choicesChosen.innerHTML = `
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
          <img id="rpsImgPaper" class="rps-image" src="assets/rps-paper.png" alt="paper">
        `
        this.loseAlert();

        // comp throws scissors

      } else if (rpsCompChoice === "scissors" && rpsHumanChoice === "scissors") {
        choicesChosen.innerHTML = `
          <img id="rpsImgScissors" class="rps-image" src="assets/rps-scissors.png" alt="scissors">
          <img id="rpsImgScissors" class="rps-image" src="assets/rps-scissors.png" alt="scissors">
        `
        this.tieAlert();

      } else if (rpsCompChoice === "scissors" && rpsHumanChoice === "rock") {
        choicesChosen.innerHTML = `
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
          <img id="rpsImgScissors" class="rps-image" src="assets/rps-scissors.png" alt="scissors">
        `
        winAlert();
        
      } else if (rpsCompChoice === "scissors" && rpsHumanChoice === "paper") {
        choicesChosen.innerHTML = `
          <img id="rpsImgPaper" class="rps-image" src="assets/rps-paper.png" alt="paper">
          <img id="rpsImgScissors" class="rps-image" src="assets/rps-scissors.png" alt="scissors">
        `
        this.loseAlert();
      }
    } else {

      // MTG WINNER FUNCTION

      computerScore.innerText = this.computer[0].wins;
      humanScore.innerText = this.human[0].wins;

      var mtgCompChoice = this.getRandomChoice();
      var mtgHumanChoice = choice;

      // tie

      if (mtgHumanChoice === mtgCompChoice) {
        this.tieAlert();

        // comp throws rock

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "scissors") {
        this.loseAlert();

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "paper") {
        this.winAlert();

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "lizard") {
        this.loseAlert();

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "alien") {
        this.winAlert();

        // comp throws paper

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "scissors") {
        this.winAlert();

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "rock") {
        this.loseAlert();

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "lizard") {
        this.winAlert();

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "alien") {
        this.loseAlert();

        // comp throws scissors

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "rock") {
        this.winAlert();

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "paper") {
        this.loseAlert();

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "lizard") {
        this.loseAlert();

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "alien") {
        this.winAlert();

        // comp throws lizard

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "rock") {
        this.winAlert();

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "paper") {
        this.loseAlert();

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "scissors") {
        this.winAlert();

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "alien") {
        this.loseAlert();

        // comp throws alien

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "paper") {
        this.winAlert();

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "rock") {
        this.loseAlert();

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "lizard") {
        this.winAlert();

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "scissors") {
        this.loseAlert();
      }
    }
  }
  resetGame() {
    this.human[0].wins = 0;
    this.computer[0].wins = 0;
  }
  winAlert() {
    game.human[0].wins++;
    mtgChoicesChosenScreen();
    rpsHeading.innerText = "Construct defeated";
    mtgHeading.innerText = "Construct defeated";
    setTimeout(function() {rpsGame()}, 2000);
  }
  loseAlert() {
    game.computer[0].wins++;
    mtgChoicesChosenScreen();
    rpsHeading.innerText = "Planeswalker defeated";
    mtgHeading.innerText = "Planeswalker defeated";
    setTimeout(function() {rpsGame()}, 2000);
  
  }
  tieAlert() {
    mtgChoicesChosenScreen();
    rpsHeading.innerText = "Evenly matched";
    mtgHeading.innerText = "Evenly matched";
    setTimeout(function() {rpsGame()}, 2000);
  }
}