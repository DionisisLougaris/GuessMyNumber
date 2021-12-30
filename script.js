'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let lives = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number.. :(';
    //player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You got it! :)';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
  //player guesses wrong
  else if (guess !== secretNumber) {
    if (lives > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high! Try again!' : 'Too low! Try again!';
      lives--;
      document.querySelector('.score').textContent = lives;
    } else {
      document.querySelector('.message').textContent = 'Game over...';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Lets play again!';
  if (lives > highscore) {
    highscore = lives;
  }
  document.querySelector('.highscore').textContent = highscore;
  lives = 20;
  document.querySelector('.score').textContent = lives;
});
