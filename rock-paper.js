// get user input
const getUserChoice = (userInput) => {
  // convert user input to lower case
  userInput = userInput.toLowerCase();
  // return correct UserInput
  if (
    userInput === "bomb" ||
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    // log error for incorrect input
    console.log("Enter the correct user choice: rock,scissors,paper");
  }
};

// get Computer choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      console.log("No number chosen");
  }
}

// function to determine the winner of the game
function determineWinner(userChoice, computerChoice) {
  if (userChoice === "bomb") {
    return "User Won!";
  }
  if (userChoice === computerChoice) {
    return "The game is a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer is the winner";
    } else {
      return "User Won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors" || computerChoice === "rock") {
      return "Computer is the winner";
    } else {
      return "The game is a tie";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock" || computerChoice === "paper") {
      return "User won!";
    } else {
      ("This is a tie");
    }
  }
}

// call all functions and start game
function playGame() {
  userChoice = getUserChoice("bomb");
  console.log("User Choice: " + userChoice);
  computerChoice = getComputerChoice();
  console.log("Computer Choice: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
