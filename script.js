'use strict';
/*
let message = document.querySelector('.message');
console.log(message.textContent);
message.textContent = '🙌 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(docuʥment.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let scoreContent = document.querySelector('.score');
let highScore = 0;

let number = document.querySelector('.number');
number.textContent = '👎🏼';
const highScoreContent = document.querySelector('.highscore');
const message = document.querySelector('.message');

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guessNumber) {
    message.textContent = '🌋 No Number';
  }
  // when the guess is right
  else if (guessNumber == secretNumber) {
    message.textContent = 'Correct Number! 🏖️ ';
    document.querySelector('body').style.backgroundColor = 'green';
    number.textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      highScoreContent.textContent = highScore;
    }
  }
  // when the guess is greater
  else if (guessNumber > secretNumber) {
    // when score is greather than one
    if (score > 1) {
      message.textContent = ' 📈 Too high!';
      score--;
      scoreContent.textContent = String(score);
    }
    // When score becomes one
    else if (score == 1) {
      message.textContent = 'You lost the game';
      score--;
      scoreContent.textContent = String(score);
    }
  }
  // When the guess is lower
  else if (guessNumber < secretNumber) {
    // When the score is greather than one
    if (score > 1) {
      message.textContent = '📉 Too low!';
      score--;
      scoreContent.textContent = String(score);
    }
    // When the score is one
    else if (score == 1) {
      message.textContent = 'You lost the game';
      score--;
      scoreContent.textContent = String(score);
    }
  }
});
