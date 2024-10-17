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
      return `You both chose ${humanChoice}, so it's a draw!\nYour score:${humanScore}.\nComputer score: ${computerScore}.`;
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
        return `You win the game!\nYou scored ${finalHumanScore}.\nThe computer's final score is ${finalComputerScore}.`;
      } else
        return `You win the round! ${humanChoice} beats ${computerChoice}.\nYour score: ${humanScore}.\nComputer score: ${computerScore}.`;
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
        return `The computer wins the game.\nIt scored ${finalComputerScore}.\nYour final score is ${finalHumanScore}. `;
      } else
        return `The computer wins the round! ${computerChoice} beats ${humanChoice}.\nYour score: ${humanScore}.\nComputer score: ${computerScore}.`;
    }
  }

  let buttons = document.querySelector("#buttons");
  buttons.addEventListener("click", (e) => {
    let targetId = e.target.id;
    let computerChoice = getComputerChoice();
    let result = document.querySelector("#result");
    result.innerText = playRound(targetId, computerChoice);
  });
}

function resetGame() {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  result.innerText = "";
}

let replay = document.querySelector("#replay");
replay.addEventListener("click", resetGame);
playGame();
