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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = capitalizeFirstLetter(humanChoice);
    computerChoice = capitalizeFirstLetter(computerChoice);
    if (computerChoice == humanChoice) {
      return `You both chose ${humanChoice}, so it's a draw! Your score is ${humanScore}, the computer's is ${computerScore}.`;
    } else if (
      (humanChoice == "Rock" && computerChoice == "Scissors") ||
      (humanChoice == "Scissors" && computerChoice == "Paper") ||
      (humanChoice == "Paper" && computerChoice == "Rock")
    ) {
      ++humanScore;
      if (humanScore === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        finalHumanScore = humanScore;
        finalComputerScore = computerScore;
        humanScore = 0;
        computerScore = 0;
        return `You win the game! You scored ${finalHumanScore}. The computer's final score is ${finalComputerScore}.`;
      } else
        return `You win the round! ${humanChoice} beats ${computerChoice}. Your score is ${humanScore}. The computer's is ${computerScore}.`;
    } else {
      ++computerScore;
      if (computerScore === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        finalHumanScore = humanScore;
        finalComputerScore = computerScore;
        humanScore = 0;
        computerScore = 0;
        return `The computer wins the game. It scored ${finalComputerScore}. Your final score is ${finalHumanScore}. `;
      } else
        return `The computer wins the round! ${computerChoice} beats ${humanChoice}. Your score is ${humanScore}, the computer's is ${computerScore}.`;
    }
  }

  let buttons = document.querySelector("#buttons");
  buttons.addEventListener("click", (e) => {
    let targetId = e.target.id;
    let computerChoice = getComputerChoice();
    let result = document.querySelector("#result");
    result.textContent = playRound(targetId, computerChoice);
  });
}

function resetGame() {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  result.textContent = "";
}

let replay = document.querySelector("#replay");
replay.addEventListener("click", resetGame);
playGame();
