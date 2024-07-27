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

function getHumanChoice() {
  let humanChoice = prompt("What's your move?");
  if (
    humanChoice.toLowerCase() != "rock" &&
    humanChoice.toLowerCase() != "paper" &&
    humanChoice.toLowerCase() != "scissors"
  ) {
    humanChoice = getHumanChoice();
    return humanChoice;
  } else {
    return humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log(
        `You played: ${humanChoice}. The computer played: ${computerChoice}. It's a draw! Play another round.`
      );
    } else if (
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "scissors" && computerChoice == "paper")
    ) {
      humanScore += 1;
      console.log(
        `You played: ${humanChoice}. The computer played: ${computerChoice}.You win the round! ${humanChoice} beats ${computerChoice}. Your score is ${humanScore}. The computer score is ${computerScore}.`
      );
    } else {
      computerScore += 1;
      console.log(
        `You played: ${humanChoice}. The computer played: ${computerChoice}. You lose the round! ${computerChoice} beats ${humanChoice}. Your score is ${humanScore}. The computer score is ${computerScore}.`
      );
    }
  }
  for (let i = 1; i < 6; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore == computerScore) {
    console.log("Draw!");
  } else if (humanScore > computerScore) {
    console.log(
      `You win the game! Your score is ${humanScore}. The computer scored ${computerScore}.`
    );
  } else {
    console.log(
      `The computer wins the game! It scored ${computerScore}. Your score was ${humanScore}.`
    );
  }
}

playGame();
