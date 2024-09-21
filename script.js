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
	if (humanChoice == computerChoice) {
		resultsDiv.innerText = `You played: ${humanChoice}. The computer played: ${computerChoice}. It's a draw! Play another round.`;
	} else if (
		(humanChoice == "Paper" && computerChoice == "Rock") ||
		(humanChoice == "Rock" && computerChoice == "Scissors") ||
		(humanChoice == "Scissors" && computerChoice == "Paper")
	) {
		humanScore += 1;
		resultsDiv.innerText = `You played: ${humanChoice}. The computer played: ${computerChoice}.You win the round! ${humanChoice} beats ${computerChoice}. Your score is ${humanScore}. The computer score is ${computerScore}.`;
	} else {
		computerScore += 1;
		resultsDiv.innerText = `You played: ${humanChoice}. The computer played: ${computerChoice}. You lose the round! ${computerChoice} beats ${humanChoice}. Your score is ${humanScore}. The computer score is ${computerScore}.`;
	}
	if (humanScore == 5) {
		resultsDiv.innerText = `You win the game! Your final score is ${humanScore}. The computer scored ${computerScore}.`;
		rockBtn.disabled = true;
		paperBtn.disabled = true;
		scissorsBtn.disabled = true;
		restartBtn.disabled = false;
	} else if (computerScore == 5) {
		`The computer wins the game! It scored ${computerScore}. Your score was ${humanScore}.`;
		rockBtn.disabled = true;
		paperBtn.disabled = true;
		scissorsBtn.disabled = true;
		restartBtn.disabled = false;
	}
}

function restartGame() {
	humanScore = 0;
	computerScore = 0;
	rockBtn.disabled = false;
	paperBtn.disabled = false;
	scissorsBtn.disabled = false;
	restartBtn.disabled = true;
	resultsDiv.innerText = "The results of your game will be displayed here.";
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
