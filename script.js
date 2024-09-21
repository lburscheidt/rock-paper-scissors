let humanScore = 0;
let computerScore = 0;

human.innerHTML = "<h2>Your score: " + humanScore + "</h2>";
computer.innerHTML = "<h2>Computer score: " + computerScore + "</h2>";
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
	human.innerHTML = "<h2>Your score: " + humanScore + "</h2>";
	computer.innerHTML = "<h2>Computer score: " + computerScore + "</h2>";
	resultsDiv.innerHTML = "";
	resultsDiv.innerHTML =
		"You played: " +
		humanChoice +
		".<br /> The computer played: " +
		computerChoice +
		".";

	let isDraw = humanChoice == computerChoice;
	let humanWinsRound =
		(humanChoice === "Paper" && computerChoice === "Rock") ||
		(humanChoice === "Rock" && computerChoice === "Scissors") ||
		(humanChoice === "Scissors" && computerChoice === "Paper");

	if (isDraw) {
		humanScore.innerHTML = humanScore;
		computerScore.innerHTML = computerScore;
		resultsDiv.innerHTML = "It's a draw! Play another round.";
	} else if (humanWinsRound) {
		humanScore += 1;
		human.innerHTML = "<h2>Your score: " + humanScore + "</h2>";

		if (hasWonGame()) {
			human.innerHTML = "<h2>Your score: " + humanScore + "</h2>";
			winMsgs();
		} else {
			human.innerHTML = "<h2>Your score: " + humanScore + "</h2>";
			resultsDiv.innerHTML +=
				"You win the round! " + humanChoice + " beats " + computerChoice + ".";
		}
	} else {
		computerScore += 1;
		computer.innerHTML = "<h2>Computer score: " + computerScore + "</h2>";
		if (hasWonGame()) {
			winMsgs();
		} else {
			computer.innerHTML = "<h2>Computer score: " + computerScore + "</h2>";
			resultsDiv.innerHTML +=
				"You lose the round! " + computerChoice + " beats " + humanChoice + ".";
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
	human.innerHTML = "";
	computer.innerHTML = "";

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
