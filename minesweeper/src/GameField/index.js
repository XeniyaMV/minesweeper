import './style.scss';

import { progressBar } from '../ProgressBar';
import { Game } from '../Game';
import { createButton } from '../Button';
import { stopWatch } from '../StopWatch';
import { createHeader } from '../Header';

const body = document.querySelector('body');
body.addEventListener('contextmenu', (event) => {
  event.preventDefault();
})
body.classList.add('page');
body.append(createHeader());

const gameField = document.createElement('main');
const gameContainer = document.createElement('section');
const recordsContainer = document.createElement('div');
const records = document.createElement('div');
const recordsList = document.createElement('ul');
const darkScreen = document.createElement('div');
const gameOver = document.createElement('div');
const youWin = document.createElement('div');
const selectLevel = document.querySelector('.level_select');
const inputMines = document.querySelector('.number-mines_input');
const levelSelect = document.querySelector('.list-menu_item__level');
let myGame = new Game(+selectLevel.value, +selectLevel.value);
const buttonGameOver = createButton({title: 'Close', className: 'game-field_game-over-button', onClick: () => {
  const gameContainer = document.querySelector('.game-field_game-container');
  const game = document.querySelector('.game-field_game');
  const button = document.querySelector('.progress-bar_button');

  myGame = new Game(+selectLevel.value, +inputMines.value);
  game.remove(); 
  gameContainer.prepend(myGame.htmlElement);
  darkScreen.classList.remove('dark-screen__active');
  gameOver.classList.remove('game-field_game-over__active');
  button.textContent = 'Play';

}});
const buttonYouWin = createButton({title: 'Close', className: 'game-field_you-win-button', onClick: () => {
  const gameContainer = document.querySelector('.game-field_game-container');
  const game = document.querySelector('.game-field_game');
  myGame = new Game(+selectLevel.value, +inputMines.value);
  game.remove(); 
  gameContainer.prepend(myGame.htmlElement);
  darkScreen.classList.remove('dark-screen__active');
  youWin.classList.remove('game-field_you-win__active');
}});
const buttonNewGame = createButton({title: 'New Game', className: 'game-field_new-game-button', onClick: () => {
  const gameContainer = document.querySelector('.game-field_game-container');
  const game = document.querySelector('.game-field_game');
  const h = document.querySelector('.time_hours');
  const m = document.querySelector('.time_minutes');
  const s = document.querySelector('.time_seconds');
  const counter = document.querySelector('.counter-container_counter');
  
  myGame = new Game(+selectLevel.value, +inputMines.value);
  if (+inputMines.value >= myGame.sizeField * myGame.sizeField) {
    inputMines.value = myGame.sizeField * myGame.sizeField - 1;
  }
  game.remove(); 
  gameContainer.prepend(myGame.htmlElement);
  stopWatch('stop', s, m, h);
  counter.innerHTML = '';
}});

levelSelect.addEventListener('click', (event) => {
  if (event.target.classList.contains('list-menu_item-title') || event.target.classList.contains('icon')) {
    const header = document.querySelector('.header');
    const burger = header.querySelector('.burger-menu');
    const listMenu = header.querySelector('.list-menu');
    if(!burger.classList.contains('burger-menu__active')) {
      burger.classList.add('burger-menu__active');
      listMenu.classList.add('list-menu__active');
      header.classList.toggle('header__active');
    }
    header.classList.toggle('header__level-open');
    levelSelect.firstElementChild.firstElementChild.classList.toggle('icon__active');
    levelSelect.lastElementChild.classList.toggle('level-container__active');
  }
})

inputMines.addEventListener('change', () => {
  const counter = document.querySelector('.counter-container_counter');
  if(+counter.textContent < 1) {
    if (+inputMines.value >= myGame.sizeField * myGame.sizeField) {
      inputMines.value = myGame.sizeField * myGame.sizeField - 1;
    } else if (+inputMines.value < 10) {
      inputMines.value = 10;
    }
    myGame.changeMinesNumber(+inputMines.value);
  }
});

selectLevel.addEventListener('change', () => {
  if (+inputMines.value >= +selectLevel.value * +selectLevel.value) {
    inputMines.value = +selectLevel.value * +selectLevel.value - 1;
  }
  myGame = new Game(+selectLevel.value, +inputMines.value);
  const gameContainer = document.querySelector('.game-field_game-container');
  const game = document.querySelector('.game-field_game');
  const h = document.querySelector('.time_hours');
  const m = document.querySelector('.time_minutes');
  const s = document.querySelector('.time_seconds');
  const counter = document.querySelector('.counter-container_counter');
  const button = document.querySelector('.progress-bar_button');

  game.remove(); 
  gameContainer.prepend(myGame.htmlElement);
  stopWatch('stop', s, m, h);
  counter.innerHTML = '';
  button.textContent = 'Play';
});

darkScreen.classList.add('dark-screen');
gameField.append(darkScreen);
recordsContainer.classList.add('game-field_records-container');
records.classList.add('game-field_records');
recordsList.classList.add('game-field_records-list');

recordsContainer.append(buttonNewGame);
recordsContainer.firstElementChild.insertAdjacentHTML('afterend',`
  <h3 class = "game-field_records-title"> Results </h3>
`);
gameField.classList.add('game-field', 'game-field__main-theme');
gameContainer.classList.add('game-field_game-container');

gameOver.classList.add('game-field_game-over');
gameOver.innerHTML = `
  <h3 class = "game-field_game-over-title"> Oops...</h3>
  <p class = "game-field_game-over-content"> Game over. Try again. </p>
`;
gameOver.append(buttonGameOver);


youWin.classList.add('game-field_you-win');
youWin.append(buttonYouWin);

records.append(recordsList);
recordsContainer.append(records);
gameContainer.append(myGame.htmlElement);
gameContainer.append(recordsContainer);
gameField.append(progressBar);
gameField.append(gameContainer);
gameField.append(gameOver);
gameField.append(youWin);


export { gameField };