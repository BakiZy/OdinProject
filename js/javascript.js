// let answer = parseInt(
//   prompt("Please enter number you would like to fizzbuzz up to")
// );

// for (let i = 1; i <= answer; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//create game of rock paper scissors with a computer and a user

function computerChoiceZ() {
  if (Math.random() < 0.34) {
    console.log("computer chose rock");
    return "rock";
  } else if (Math.random() <= 0.67) {
    console.log("computer choose paper");
    return "paper";
  } else {
    console.log("computer chose scissors");
    return "scissors";
  }
}
let computerChoice = computerChoiceZ();
function rps(userChoice) {
  if (computerChoice === userChoice) {
    console.log("It's a tie!");
  } else if (computerChoice === "rock") {
    if (userChoice === "paper") {
      console.log("User wins!");
    } else {
      console.log("Computer wins!");
    }
  } else if (computerChoice === "paper") {
    if (userChoice === "scissors") {
      console.log("User wins!");
    } else {
      console.log("Computer wins!");
    }
  } else if (computerChoice === "scissors") {
    if (userChoice === "rock") {
      console.log("User wins!");
    } else {
      console.log("Computer wins!");
    }
  } else {
    console.log("Something went wrong!");
    alert("you broke the game");
  }
}

let userChoice = prompt("Please choose rock, paper, or scissors");
rps(userChoice);
