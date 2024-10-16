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
