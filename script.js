function getComputerChoice() {
  let random = Math.floor(Math.random() * 10);
  if (random <= 3) {
    return "rock";
  } else if (random >= 4 && random <= 6) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("What's your move?");
  if (
    humanChoice.toLowerCase() != "rock" &&
    humanChoice.toLowerCase() != "paper" &&
    humanChoice.toLowerCase() != "scissors"
  ) {humanChoice = getHumanChoice();
   return humanChoice;
    
  } else {
    return humanChoice.toLowerCase();
  }
}

console.log(getHumanChoice());