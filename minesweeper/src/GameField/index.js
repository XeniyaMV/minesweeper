import './style.scss';

import { progressBar } from '../ProgressBar';
import { createGame } from '../Game';

const gameField = document.createElement('main');
const gameContainer = document.createElement('section');
const recordsContainer = document.createElement('div');
const records = document.createElement('input');
const game = createGame(10);

records.type = 'text';
recordsContainer.classList.add('game-field_records-container');
records.classList.add('game-field_records');

recordsContainer.innerHTML = `
  <h3 class = "game-field_records-title"> Best Results </h3>
`
gameField.classList.add('game-field', 'game-field__main-theme');
gameContainer.classList.add('game-field_game-container');

recordsContainer.append(records);
gameContainer.append(game.htmlGame);
gameContainer.append(recordsContainer);
gameField.append(progressBar);
gameField.append(gameContainer);

export { gameField };