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
		message = `you win!`;
	} else {
		computerScore++;
		message = `you lose!`;
	}

	return message;
}

function showResult(message) {
	results.textContent = `${message}`;
	score.textContent = `your score - ${playerScore} | 
											computer score - ${computerScore}`;

	if (playerScore === 5) {
		results.textContent = `you won the game! congratulations!`
		resetGame();
	} else if (computerScore === 5) {
		results.textContent = `you lost the game! that's too bad!`
		resetGame();
	}
}

function resetGame() {
	playerScore = 0;
	computerScore = 0;
}

const container = document.querySelector(`div`);

for (choice of [`rock`, `paper`, `scissors`]) {
	const choiceBtn = document.createElement(`button`);

	choiceBtn.textContent = choice;

	choiceBtn.addEventListener(`click`, () => 
		playRound(choice, getComputerChoice()));

	container.appendChild(choiceBtn);
}

const score = document.createElement(`div`);
score.textContent = `your score - 0 | computer score - 0`;
container.appendChild(score);

const results = document.createElement(`div`);
container.appendChild(results);

let playerScore = 0;
let computerScore = 0;