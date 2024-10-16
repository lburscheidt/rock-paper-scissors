let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoiceNumber = Math.floor(Math.random() * 3);
  if (computerChoiceNumber === 0) {
    return "Rock";
  } else if (computerChoiceNumber === 1) {
    return "Paper";
  } else if (computerChoiceNumber === 2) {
    return "Scissors";
  }
}

//console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt("Please enter your move: rock, paper, or scissors");
  if (
    humanChoice.toLowerCase() == "rock" ||
    humanChoice.toLowerCase() == "paper" ||
    humanChoice.toLowerCase() == "scissors"
  ) {
    return humanChoice;
  } else {
    return (humanChoice = prompt(
      "Sorry, that's not a valid move. Please select from rock, paper, or scissors.",
    ));
  }
}

//console.log(getHumanChoice());

function capitalize(string) {
  let firstLetter = string.slice(0, 1).toUpperCase();
  let lowerCase = string.slice(1).toLowerCase();
  let newString = firstLetter + lowerCase;

  return newString;
}

function playRound(computerChoice, humanChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "Scissors") ||
    (humanChoice == "scissors" && computerChoice == "Paper") ||
    (humanChoice == "paper" && computerChoice == "Rock")
  ) {
    ++humanScore;
    return `You win! ${capitalize(humanChoice)} beats ${computerChoice}.`;
  } else {
    ++computerScore;
    return `Computer wins! ${computerChoice} beats ${capitalize(humanChoice)}.`;
  }
}

console.log(playRound(getComputerChoice(), getHumanChoice()));
