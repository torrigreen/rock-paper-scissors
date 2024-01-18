function getComputerChoice() {
	let options = [`rock`, `paper`, `scissors`];

	choice = options[Math.floor(Math.random() * options.length)];

	return choice;
}

function playRound(playerChoice, computerChoice) {
	let playerWin = false;

	if (playerChoice === computerChoice) {playerWin = `tie`;};

	switch (true) {
		case (playerChoice === `rock`) && (computerChoice === `scissors`):
		case (playerChoice === `paper`) && (computerChoice === `rock`):
		case (playerChoice === `scissors`) && (computerChoice === `paper`):
			playerWin = true;
			break;
	}

	showResult(updateScore(playerWin));
}

function updateScore(winner) {
	let message;

	if (winner === `tie`) {
		message = `you tied! replay the round.`;
	} else if (winner) {
		playerScore++;
		message = `you win! score: ${playerScore} - ${computerScore}`;
	} else {
		computerScore++;
		message = `you lose! score: ${playerScore} - ${computerScore}`;
	}

	return message;
}

function showResult(message) {
	results.innerHTML += `${message}<br />`;

	if (playerScore === 5) {
		results.innerHTML += `you won the game! congratulations!`
		endGame();
	} else if (computerScore === 5) {
		results.innerHTML += `you lost the game! that's too bad!`
		endGame();
	}
}

function endGame() {
	const buttons = document.querySelectorAll(`button`);
	buttons.forEach((button) => container.removeChild(button));
	results.innerHTML += `<br />refresh to restart.`
}

const container = document.querySelector(`div`);

for (choice of [`rock`, `paper`, `scissors`]) {
	const choiceBtn = document.createElement(`button`);

	choiceBtn.textContent = choice;

	choiceBtn.addEventListener(`click`, () => 
		playRound(choice, getComputerChoice()));

	container.appendChild(choiceBtn);
}

const results = document.createElement(`div`);
container.appendChild(results);

let playerScore = 0;
let computerScore = 0;