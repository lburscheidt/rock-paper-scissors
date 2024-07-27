let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 10);
  if (random <= 3) {
    return "Rock";
  } else if (random >= 4 && random <= 6) {
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
  ) {humanChoice = getHumanChoice();
   return humanChoice;
    
  } else {
    return humanChoice[0].toUpperCase() +humanChoice.slice(1).toLowerCase();
  }
}
/*Logic for a single round*/



function playRound(humanChoice, computerChoice) {
   let msg = "";
    if( humanChoice == computerChoice){
console.log(`You played: ${humanChoice}. The computer played: ${computerChoice}.It's a draw! Play another round.`)
   }
   else if((humanChoice == "paper" && computerChoice == "rock")||(humanChoice == "rock" && computerChoice == "scissors")||(humanChoice == "scissors" && computerChoice == "paper")){
    humanScore += 1;
    console.log(`You played: ${humanChoice}. The computer played: ${computerChoice}.You win! ${humanChoice} beats ${computerChoice}. Your score is ${humanScore}. The computer score is ${computerScore}.`);
   
   }
else{
    computerScore +=1;
    console.log(`ou played: ${humanChoice}. The computer played: ${computerChoice}. You lose! ${computerChoice} beats ${humanChoice}. Your score is ${humanScore}. The computer score is ${computerScore}.`);
}
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);