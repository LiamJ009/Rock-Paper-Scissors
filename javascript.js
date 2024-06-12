// returns a random RPS choice
function getComputerChoice() {
  let num = Math.random();
  let choice;

  if (num <= 1 / 3) {
    choice = "rock";
  } else if (num > 1 / 3 && num <= 2 / 3) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  return choice;
}

// get human RPS choice
function getHumanChoice() {
  let choice = prompt("paper, scissors, or rock?: ");

  return choice;
}

let humanScore = 0;
let computerScore = 0;

// play a round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose!");
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win!");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose!");
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win!");
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose!");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win!");
    humanScore++;
  } else {
    console.log("You draw!");
  }
}

// round 1
console.log("Round 1:");
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// round 2
console.log("Round 2:");
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// round 3
console.log("Round 3:");
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// round 4
console.log("Round 4:");
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// round 5
console.log("Round 5:");
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

let winner;

console.log("Final score: You: " + humanScore + ", Computer: ", computerScore);
if (humanScore > computerScore) {
  winner = "You";
} else if (humanScore < computerScore) {
  winner = "Computer";
} else {
  winner = "Noone";
}

console.log("And the winner is: " + winner + "!");
