// A Game should include:
// A way to reset the Game’s board to begin a new game

class Game {
  constructor(format) {
    this.human = [];
    this.computer = [];
    this.format = format;
  }

// RANDOMIZERS

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

  // SHOW 2 FIGHTERS

  // displayFighters() {
  // }

  // WHO WON

  determineWinner(choice) {
    // RPS WINNER FUNCTION

    if (this.format === "rps") {
      // computerScore.innerText = this.computer[0].wins;
      // humanScore.innerText = this.human[0].wins;

      var rpsCompChoice = this.getRandomChoice();
      var rpsHumanChoice = choice;

        // comp throws rock

      if (rpsCompChoice === "rock" && rpsHumanChoice === "rock") {
        rpsChoicesChosen.innerHTML = `
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
        `
        this.tieAlert();

      } else if (rpsCompChoice === "rock" && rpsHumanChoice === "scissors") {
        rpsChoicesChosen.innerHTML = `
          <img id="rpsImgScissors" class="rps-image" src="assets/rps-scissors.png" alt="scissors">
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
        `
        this.loseAlert();

      } else if (rpsCompChoice === "rock" && rpsHumanChoice === "paper") {
        rpsChoicesChosen.innerHTML = `
          <img id="rpsImgPaper" class="rps-image" src="assets/rps-paper.png" alt="paper">
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
        `
        this.winAlert();

        // comp throws paper

      } else if (rpsCompChoice === "paper" && rpsHumanChoice === "paper") {
        rpsChoicesChosen.innerHTML = `
          <img id="rpsImgPaper" class="rps-image" src="assets/rps-paper.png" alt="paper">
          <img id="rpsImgPaper" class="rps-image" src="assets/rps-paper.png" alt="paper">
        `
        this.tieAlert();

      } else if (rpsCompChoice === "paper" && rpsHumanChoice === "scissors") {
        rpsChoicesChosen.innerHTML = `
          <img id="rpsImgScissors" class="rps-image" src="assets/rps-scissors.png" alt="scissors">
          <img id="rpsImgPaper" class="rps-image" src="assets/rps-paper.png" alt="paper">
        `
       this.winAlert();

      } else if (rpsCompChoice === "paper" && rpsHumanChoice === "rock") {
        rpsChoicesChosen.innerHTML = `
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
          <img id="rpsImgPaper" class="rps-image" src="assets/rps-paper.png" alt="paper">
        `
        this.loseAlert();

        // comp throws scissors

      } else if (rpsCompChoice === "scissors" && rpsHumanChoice === "scissors") {
        rpsChoicesChosen.innerHTML = `
          <img id="rpsImgScissors" class="rps-image" src="assets/rps-scissors.png" alt="scissors">
          <img id="rpsImgScissors" class="rps-image" src="assets/rps-scissors.png" alt="scissors">
        `
        this.tieAlert();

      } else if (rpsCompChoice === "scissors" && rpsHumanChoice === "rock") {
        rpsChoicesChosen.innerHTML = `
          <img id="rpsImgRock" class="rps-image" src="assets/rps-rock.png" alt="rock">
          <img id="rpsImgScissors" class="rps-image" src="assets/rps-scissors.png" alt="scissors">
        `
        winAlert();
        
      } else if (rpsCompChoice === "scissors" && rpsHumanChoice === "paper") {
        rpsChoicesChosen.innerHTML = `
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

      // comp throws rock

      if (mtgCompChoice === "rock" && mtgHumanChoice === "rock") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgRock" class="mtg-image hidden" src="assets/mtg-rock.jpeg" alt="rock">
          <img id="mtgImgRock" class="mtg-image hidden" src="assets/mtg-rock.jpeg" alt="rock">          
        `
        this.tieAlert();

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "scissors") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgScissors" class="mtg-image hidden" src="assets/mtg-scissors.jpeg" alt="scissors">
          <img id="mtgImgRock" class="mtg-image hidden" src="assets/mtg-rock.jpeg" alt="rock">
        `
        this.loseAlert();

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "paper") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgPaper" class="mtg-image hidden" src="assets/mtg-paper.jpeg" alt="paper">
          <img id="mtgImgRock" class="mtg-image hidden" src="assets/mtg-rock.jpeg" alt="rock">          
        `
        this.winAlert();

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "lizard") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgLizard" class="mtg-image hidden" src="assets/mtg-lizard.jpeg" alt="lizard">
          <img id="mtgImgRock" class="mtg-image hidden" src="assets/mtg-rock.jpeg" alt="rock">
        `
        this.loseAlert();

      } else if (mtgCompChoice === "rock" && mtgHumanChoice === "alien") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgAlien" class="mtg-image hidden" src="assets/mtg-alien.jpeg" alt="alien">
          <img id="mtgImgRock" class="mtg-image hidden" src="assets/mtg-rock.jpeg" alt="rock">
        `
        this.winAlert();

        // comp throws paper

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "paper") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgPaper" class="mtg-image hidden" src="assets/mtg-paper.jpeg" alt="paper">
          <img id="mtgImgPaper" class="mtg-image hidden" src="assets/mtg-paper.jpeg" alt="paper">
        `
        this.tieAlert();        

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "scissors") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgScissors" class="mtg-image hidden" src="assets/mtg-scissors.jpeg" alt="scissors">
          <img id="mtgImgPaper" class="mtg-image hidden" src="assets/mtg-paper.jpeg" alt="paper">
        `
        this.winAlert();

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "rock") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgRock" class="mtg-image hidden" src="assets/mtg-rock.jpeg" alt="rock">
          <img id="mtgImgPaper" class="mtg-image hidden" src="assets/mtg-paper.jpeg" alt="paper">
        `
        this.loseAlert();

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "lizard") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgLizard" class="mtg-image hidden" src="assets/mtg-lizard.jpeg" alt="lizard">
          <img id="mtgImgPaper" class="mtg-image hidden" src="assets/mtg-paper.jpeg" alt="paper">
        `
        this.winAlert();

      } else if (mtgCompChoice === "paper" && mtgHumanChoice === "alien") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgAlien" class="mtg-image hidden" src="assets/mtg-alien.jpeg" alt="alien">
          <img id="mtgImgPaper" class="mtg-image hidden" src="assets/mtg-paper.jpeg" alt="paper">
        `
        this.loseAlert();

        // comp throws scissors

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "scissors") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgScissors" class="mtg-image hidden" src="assets/mtg-scissors.jpeg" alt="scissors">
          <img id="mtgImgScissors" class="mtg-image hidden" src="assets/mtg-scissors.jpeg" alt="scissors">
        `
        this.tieAlert();        

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "rock") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgRock" class="mtg-image hidden" src="assets/mtg-rock.jpeg" alt="rock">
          <img id="mtgImgScissors" class="mtg-image hidden" src="assets/mtg-scissors.jpeg" alt="scissors">
        `
        this.winAlert();

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "paper") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgPaper" class="mtg-image hidden" src="assets/mtg-paper.jpeg" alt="paper">
          <img id="mtgImgScissors" class="mtg-image hidden" src="assets/mtg-scissors.jpeg" alt="scissors">
        `
        this.loseAlert();

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "lizard") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgLizard" class="mtg-image hidden" src="assets/mtg-lizard.jpeg" alt="lizard">
          <img id="mtgImgScissors" class="mtg-image hidden" src="assets/mtg-scissors.jpeg" alt="scissors">
        `
        this.loseAlert();

      } else if (mtgCompChoice === "scissors" && mtgHumanChoice === "alien") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgAlien" class="mtg-image hidden" src="assets/mtg-alien.jpeg" alt="alien">
          <img id="mtgImgScissors" class="mtg-image hidden" src="assets/mtg-scissors.jpeg" alt="scissors">
        `
        this.winAlert();

        // comp throws lizard

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "lizard") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgLizard" class="mtg-image hidden" src="assets/mtg-lizard.jpeg" alt="lizard">
          <img id="mtgImgLizard" class="mtg-image hidden" src="assets/mtg-lizard.jpeg" alt="lizard">
        `
        this.tieAlert();        

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "rock") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgLizard" class="mtg-image hidden" src="assets/mtg-lizard.jpeg" alt="lizard">4
          <img id="mtgImgRock" class="mtg-image hidden" src="assets/mtg-rock.jpeg" alt="rock">
        `
        this.winAlert();

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "paper") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgPaper" class="mtg-image hidden" src="assets/mtg-paper.jpeg" alt="paper">
          <img id="mtgImgLizard" class="mtg-image hidden" src="assets/mtg-lizard.jpeg" alt="lizard">
        `
        this.loseAlert();

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "scissors") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgScissors" class="mtg-image hidden" src="assets/mtg-scissors.jpeg" alt="scissors">
          <img id="mtgImgLizard" class="mtg-image hidden" src="assets/mtg-lizard.jpeg" alt="lizard">
        `
        this.winAlert();

      } else if (mtgCompChoice === "lizard" && mtgHumanChoice === "alien") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgAlien" class="mtg-image hidden" src="assets/mtg-alien.jpeg" alt="alien">
          <img id="mtgImgLizard" class="mtg-image hidden" src="assets/mtg-lizard.jpeg" alt="lizard">
        `
        this.loseAlert();

        // comp throws alien

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "alien") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgAlien" class="mtg-image hidden" src="assets/mtg-alien.jpeg" alt="alien">
          <img id="mtgImgAlien" class="mtg-image hidden" src="assets/mtg-alien.jpeg" alt="alien">
        `
        this.tieAlert();

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "paper") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgPaper" class="mtg-image hidden" src="assets/mtg-paper.jpeg" alt="paper">
          <img id="mtgImgAlien" class="mtg-image hidden" src="assets/mtg-alien.jpeg" alt="alien">
        `
        this.winAlert();

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "rock") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgRock" class="mtg-image hidden" src="assets/mtg-rock.jpeg" alt="rock">
          <img id="mtgImgAlien" class="mtg-image hidden" src="assets/mtg-alien.jpeg" alt="alien">
        `
        this.loseAlert();

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "lizard") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgLizard" class="mtg-image hidden" src="assets/mtg-lizard.jpeg" alt="lizard">
          <img id="mtgImgAlien" class="mtg-image hidden" src="assets/mtg-alien.jpeg" alt="alien">
        `
        this.winAlert();

      } else if (mtgCompChoice === "alien" && mtgHumanChoice === "scissors") {
        mtgChoicesChosen.innerHTML = `
          <img id="mtgImgScissors" class="mtg-image hidden" src="assets/mtg-scissors.jpeg" alt="scissors">
          <img id="mtgImgAlien" class="mtg-image hidden" src="assets/mtg-alien.jpeg" alt="alien">
        `
        this.loseAlert();
      }
    }
  }

  // TIE/WIN/LOSE ALERTS

  winAlert() {
    this.human[0].wins++;
    humanScore.innerText = this.human[0].wins;
    if (this.format === "rps") {
      rpsChoicesChosenScreen();
    } else {
      mtgChoicesChosenScreen();
    }
    whoWon.innerText = "Construct defeated";
  }
  loseAlert() {
    this.computer[0].wins++;
    computerScore.innerText = this.computer[0].wins;
    whoWon.innerText = "Planeswalker defeated";
    if (this.format === "rps") {
      rpsChoicesChosenScreen();
    } else {
      mtgChoicesChosenScreen();
    }
  }
  tieAlert() {
    whoWon.innerText = "Evenly matched";
    if (this.format === "rps") {
      rpsChoicesChosenScreen();
    } else {
      mtgChoicesChosenScreen();
    }
  }

  // RESET SCORES

  // resetGame() {
  //   this.human[0].wins = 0;
  //   this.computer[0].wins = 0;
  // }
}