// function to randomly return `rock`, `paper`, or `scissors`
function getComputerChoice() {
  // have a list of choices
  let options = [`rock`, `paper`, `scissors`];

  // pick a random choice
  choice = options[Math.floor(Math.random() * options.length)];

  // return the result
  return choice;
}

// function to get the player's choice
function getPlayerChoice () {
  // repeat until the player chooses a valid option
  let validChoice;
  let choice;

  while (!validChoice) {
    // prompt the player for a choice
    choice = prompt(`rock, paper, or scissors?`);

    // make the choice lowercase
    choice = choice.toLowerCase();

    // check for spelling
    let options = [`rock`, `paper`, `scissors`];
    validChoice = options.includes(choice);

    // tell player if their choice was invalid
    if (!validChoice) {alert(`${choice} is not a valid option`)};
  }

  // return the choice
  return choice;
}

// function to play a single round
function playRound(playerChoice, computerChoice) {
  // check for a tie
  if (playerChoice === computerChoice) {return `tie`};

  // decide who wins
  let playerWin = false;

  switch (true) {
    case (playerChoice === `rock`) && (computerChoice === `scissors`):
    case (playerChoice === `paper`) && (computerChoice === `rock`):
    case (playerChoice === `scissors`) && (computerChoice === `paper`):
      playerWin = true;
      break;
  }

  // return whether the player won or not
  return playerWin;
}

// function to play a whole best-of-five game
function game() {
  // make variables to track score
  let playerScore = 0;
  let computerScore = 0;

  // play rounds until someone gets to three wins
  while (playerScore < 3 && computerScore < 3) {
    // play a round
    let result = playRound(getPlayerChoice(), getComputerChoice());
    
    // alert if there was a tie
    if (result === `tie`) {
      console.log(`you tied! replay the round.`);
    } // add score to player if they won
    else if (result) {
      playerScore++;
      console.log(`you win! score: ${playerScore} - ${computerScore}`);
    } // add score to computer otherwise
    else {
      computerScore++;
      console.log(`you lose! score: ${playerScore} - ${computerScore}`);
    }
  }

  // tell player who wins the game
  let message = (playerScore === 3) ? `you won the game! congratulations!` : `you lost the game! that's too bad!`;
  console.log(message);
}