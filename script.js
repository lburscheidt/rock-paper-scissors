function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else if (computerChoice === 2) {
    return "scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (computerChoice == humanChoice) {
      return `You both chose ${humanChoice}, so it's a draw! Your score is ${humanScore}, the computer's is ${computerScore}.`;
    } else if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "scissors" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "rock")
    ) {
      ++humanScore;
      return `You win the round! ${humanChoice} beats ${computerChoice}. Your score is ${humanScore}, the computer's is ${computerScore}.`;
    } else {
      ++computerScore;
      return `Computer wins the round! ${computerChoice} beats ${humanChoice}. Your score is ${humanScore}, the computer's is ${computerScore}.`;
    }
  }

  let buttons = document.querySelector("#buttons");
  buttons.addEventListener("click", (e) => {
    let targetId = e.target.id;
    let computerChoice = getComputerChoice();
    console.log(playRound(targetId, computerChoice));
  });
}

playGame();
