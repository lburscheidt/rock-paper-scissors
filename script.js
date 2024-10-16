let humanScore = 0;
let computerScore = 0;

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

console.log(getComputerChoice());

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

console.log(getHumanChoice());
