function getComputerChoice() {
  let computerChoiceNumber = Math.floor(Math.random() * 3);
  if (computerChoiceNumber === 0) {
    return "rock";
  } else if (computerChoiceNumber === 1) {
    return "paper";
  } else if (computerChoiceNumber === 2) {
    return "scissors";
  }
}

// console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt(
    "Please enter your move: rock, paper, or scissors",
  ).toLowerCase();
  if (
    humanChoice == "rock" ||
    humanChoice == "paper" ||
    humanChoice == "scissors"
  ) {
    return humanChoice;
  } else {
    return (humanChoice = prompt(
      "Sorry, that's not a valid move. Please select from rock, paper, or scissors.",
    ));
  }
}

// console.log(getHumanChoice());

function capitalize(string) {
  let firstLetter = string.slice(0, 1).toUpperCase();
  let lowerCase = string.slice(1).toLowerCase();
  let newString = firstLetter + lowerCase;

  return newString;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
      return `You both chose ${humanChoice}, so it's a draw! Your score is ${humanScore}, the computer's is ${computerScore}.`;
    } else if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "scissors" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "rock")
    ) {
      ++humanScore;
      return `You win the round! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}. Your score is ${humanScore}, the computer's is ${computerScore}.`;
    } else {
      ++computerScore;
      return `Computer wins the round! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}. Your score is ${humanScore}, the computer's is ${computerScore}.`;
    }
  }
  for (let i = 1; i <= 5; i++) {
    console.log(playRound(getComputerChoice(), getHumanChoice()));
  }

  if (humanScore > computerScore) {
    return `You win the game! Your score is ${humanScore}. The computer scored ${computerScore}.`;
  } else if (computerScore > humanScore) {
    return `The computer wins the game! It scored ${computerScore}. You scored ${humanScore}.`;
  } else {
    return "It's a draw! Play again.";
  }
}

console.log(playGame());
