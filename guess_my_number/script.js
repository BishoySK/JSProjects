'use strict';

const number = document.querySelector('.number');
const guessedNumber = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');

let randomNumber;
let userScore = 20;
let userHighScore = 0;
let userHasWon=false;

const getRandomNumber = () => {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
};
getRandomNumber();

const displayMessage = userMessage => {
  message.textContent = userMessage;
};

const startAgain = () => {
  body.style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  score.textContent = userScore = 20;
  number.textContent = '?';
  guessedNumber.value = '';
  getRandomNumber();
  btnCheck.toggleAttribute('disabled')
};


btnCheck.addEventListener('click', function () {
    const userGuessedNumber = Number(guessedNumber.value);
    if (!userGuessedNumber) {
    displayMessage('🚫 No Number');
  } else if (userGuessedNumber === randomNumber) {
    displayMessage('🥳 You have won!');
    number.textContent = randomNumber;
    body.style.backgroundColor = '#60b347';
    btnCheck.toggleAttribute('disabled');
    if (userScore > userHighScore) {
      userHighScore = userScore;
      highScore.textContent = userHighScore;
    }
  } else if (userGuessedNumber !== randomNumber) {
    if (userScore > 1) {
      displayMessage(
        userGuessedNumber > randomNumber ? 'Number too high' : 'Number too low'
      );
      userScore--;
      score.textContent = userScore;
    } else {
      displayMessage('💥 You lost the game!');
      score.textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', startAgain);
