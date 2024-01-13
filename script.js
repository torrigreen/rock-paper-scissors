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
  let tie = playerChoice === computerChoice;
  if (tie) {return `you tie! replay the round.`};

  // decide who wins if there's no tie
  let playerWin = false;

  switch (true) {
    case (playerChoice === `rock`) && (computerChoice === `scissors`):
    case (playerChoice === `paper`) && (computerChoice === `rock`):
    case (playerChoice === `scissors`) && (computerChoice === `paper`):
      playerWin = true;
      break;
  }

  // tell the player who won
  return playerWin ? `you win! ${playerChoice} beats ${computerChoice}` : `you lose! ${playerChoice} beats ${computerChoice}`
}

// function to play a whole best-of-five game
  // play a round
  // add score to whoever wins
  // play rounds until someone gets to three wins
  // tell player who wins the game