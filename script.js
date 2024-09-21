let humanScore = 0;
let computerScore = 0;

restartBtn.disabled = true;

function getComputerChoice() {
	let random = Math.floor(Math.random() * 3);
	if (random == 0) {
		return "Rock";
	} else if (random == 1) {
		return "Paper";
	} else {
		return "Scissors";
	}
}

function playRound(humanChoice, computerChoice) {
	resultsDiv.innerHTML = "";
	resultsDiv.innerHTML =
		"You played: " +
		humanChoice +
		".<br /> The computer played: " +
		computerChoice +
		".<br />";

	let isDraw = humanChoice == computerChoice;
	let humanWinsRound =
		(humanChoice === "Paper" && computerChoice === "Rock") ||
		(humanChoice === "Rock" && computerChoice === "Scissors") ||
		(humanChoice === "Scissors" && computerChoice === "Paper");

	if (isDraw) {
		resultsDiv.innerHTML +=
			"Your score is: " +
			humanScore +
			".<br />The computer score is: " +
			computerScore +
			".<br />It's a draw! Play another round.";
	} else if (humanWinsRound) {
		humanScore += 1;
		if (hasWonGame()) {
			winMsgs();
		} else {
			resultsDiv.innerHTML +=
				"You win the round! " +
				humanChoice +
				" beats " +
				computerChoice +
				".<br />Your score is: " +
				humanScore +
				" . <br />The computer score is: " +
				computerScore +
				".";
		}
	} else {
		computerScore += 1;
		if (hasWonGame()) {
			winMsgs();
		} else {
			resultsDiv.innerHTML +=
				"You lose the round! " +
				computerChoice +
				" beats " +
				humanChoice +
				".<br/>Your score is: " +
				humanScore +
				".<br /> The computer score is: " +
				computerScore +
				".";
		}
	}
}

function hasWonGame() {
	if (humanScore == 5 || computerScore == 5) {
		return true;
	}
}

function winMsgs() {
	resultsDiv.innerText = "";
	rockBtn.disabled = true;
	paperBtn.disabled = true;
	scissorsBtn.disabled = true;
	restartBtn.disabled = false;
	if (humanScore == 5) {
		resultsDiv.innerText += `You win the game! Your final score is ${humanScore}. The computer scored ${computerScore}.`;
	}
	if (computerScore == 5) {
		resultsDiv.innerText += `The computer wins the game! It scored ${computerScore}. Your score was ${humanScore}.`;
	}
}

function restartGame() {
	humanScore = 0;
	computerScore = 0;
	rockBtn.disabled = false;
	paperBtn.disabled = false;
	scissorsBtn.disabled = false;
	restartBtn.disabled = true;
	resultsDiv.innerHTML =
		"Play Rock Paper Scissors against the computer!<br/>The first player to get to five points wins the game.";
}

rockBtn.addEventListener("click", function () {
	playRound("Rock", getComputerChoice());
});
paperBtn.addEventListener("click", function () {
	playRound("Paper", getComputerChoice());
});
scissorsBtn.addEventListener("click", function () {
	playRound("Scissors", getComputerChoice());
});

restartBtn.addEventListener("click", restartGame);
