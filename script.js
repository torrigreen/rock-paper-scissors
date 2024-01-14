function getComputerChoice() {
  let options = [`rock`, `paper`, `scissors`];

  choice = options[Math.floor(Math.random() * options.length)];

  return choice;
}

function getPlayerChoice () {
  let validChoice;
  let choice;

  while (!validChoice) {
    choice = prompt(`rock, paper, or scissors?`);

    // account for the input not matching case
    choice = choice.toLowerCase();

    // check for spelling errors
    let options = [`rock`, `paper`, `scissors`];
    validChoice = options.includes(choice);

    if (!validChoice) {alert(`${choice} is not a valid option`)};
  }

  return choice;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {return `tie`};

  let playerWin = false;

  switch (true) {
    case (playerChoice === `rock`) && (computerChoice === `scissors`):
    case (playerChoice === `paper`) && (computerChoice === `rock`):
    case (playerChoice === `scissors`) && (computerChoice === `paper`):
      playerWin = true;
      break;
  }

  return playerWin;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore < 3 && computerScore < 3) {
    let result = playRound(getPlayerChoice(), getComputerChoice());
    
    if (result === `tie`) {
      console.log(`you tied! replay the round.`);
    } else if (result) {
      playerScore++;
      console.log(`you win! score: ${playerScore} - ${computerScore}`);
    } else {
      computerScore++;
      console.log(`you lose! score: ${playerScore} - ${computerScore}`);
    }
  }

  let message = (playerScore === 3) ? `you won the game! congratulations!` : 
                                      `you lost the game! that's too bad!`;
  console.log(message);
}