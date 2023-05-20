import './style.scss';

import { progressBar } from '../ProgressBar';
import { Game } from '../Game';
import { createButton } from '../Button';

const gameField = document.createElement('main');
const gameContainer = document.createElement('section');
const recordsContainer = document.createElement('div');
const records = document.createElement('div');
const recordsList = document.createElement('ul');
const darkScreen = document.createElement('div');
const gameOver = document.createElement('div');
const youWin = document.createElement('div');
const game = new Game(10, 10);
const buttonGameOver = createButton({title: 'Start', className: 'game-field_game-over-button', onClick: () => {
    const newGame = new Game(10, 10);
    const gameContainer = document.querySelector('.game-field_game-container');
    const game = document.querySelector('.game-field_game');
    game.remove(); 
    gameContainer.prepend(newGame.htmlElement);
    darkScreen.classList.remove('dark-screen__active');
    gameOver.classList.remove('game-field_game-over__active');
}});
const buttonYouWin = createButton({title: 'Start', className: 'game-field_you-win-button', onClick: () => {
  const newGame = new Game(10, 10);
  const gameContainer = document.querySelector('.game-field_game-container');
  const game = document.querySelector('.game-field_game');
  game.remove(); 
  gameContainer.prepend(newGame.htmlElement);
  darkScreen.classList.remove('dark-screen__active');
  youWin.classList.remove('game-field_you-win__active');
}});

darkScreen.classList.add('dark-screen');
gameField.append(darkScreen);
recordsContainer.classList.add('game-field_records-container');
records.classList.add('game-field_records');
recordsList.classList.add('game-field_records-list');

recordsContainer.innerHTML = `
  <h3 class = "game-field_records-title"> Results </h3>
`
gameField.classList.add('game-field', 'game-field__main-theme');
gameContainer.classList.add('game-field_game-container');

gameOver.classList.add('game-field_game-over');
gameOver.innerHTML = `
  <h3 class = "game-field_game-over-title"> Oops...</h3>
  <p class = "game-field_game-over-content"> Would you like to start over? </p>
`;
gameOver.append(buttonGameOver);


youWin.classList.add('game-field_you-win');
youWin.append(buttonYouWin);

records.append(recordsList);
recordsContainer.append(records);
gameContainer.append(game.htmlElement);
gameContainer.append(recordsContainer);
gameField.append(progressBar);
gameField.append(gameContainer);
gameField.append(gameOver);
gameField.append(youWin);


export { gameField };