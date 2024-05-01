let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = 1;

function submitGuess() {
    const userGuess = parseInt(document.getElementById('guessNumber').value);
    if (userGuess === randomNumber) {
        alert('Congratulations! You guessed the right number in ' + guess + ' guesses.');
    } else if (userGuess > randomNumber) {
        alert('Try again! The number is lower.');
    } else {
        alert('Try again! The number is higher.');
    }
    guess++;
}

function playAgain() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    guess = 1;
    document.getElementById('guessNumber').value = '';
}
