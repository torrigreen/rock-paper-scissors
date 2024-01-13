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
  // repeat until the player chooses a valid option
    // prompt the player for a choice
    // make the choice lowercase
    // check for spelling
    // tell player if their choice was invalid
  // return the choice
// function to play a single round
  // check for a tie
  // decide who wins if there's no tie
  // tell the player who won
// function to play a whole best-of-five game
  // play a round
  // add score to whoever wins
  // play rounds until someone gets to three wins
  // tell player who wins the game