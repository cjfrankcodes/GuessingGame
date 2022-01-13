let maxNum = parseInt(prompt("Enter a Number"));

while (!maxNum) {
  maxNum = parseInt(prompt("Enter a Valid Number"));
}

const randomNum = Math.floor(Math.random() * maxNum) + 1;

let guess = parseInt(prompt("Enter a guess!"));

let attempts = 1;

while (parseInt(guess) !== randomNum) {
  if (guess === "q") break;
  attempts++;
  if (guess > randomNum) {
    guess = prompt("Too High! Guess Again. To Quit, Enter 'q'");
  } else {
    guess = prompt("Too Low! Guess Again. To Quit, Enter 'q'");
  }
}

if (guess !== "q") {
  alert(`Correct! It took you ${attempts} guesses. Good Job`);
}

if (guess === "q") {
  alert(`OK you quit after ${attempts} guess. Better luck next time!`);
}
