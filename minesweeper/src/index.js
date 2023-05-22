import './style.scss';
import { createHeader } from './Header';
import { gameField } from './GameField';

const body = document.querySelector('body');
body.addEventListener('contextmenu', (event) => {
  event.preventDefault();
})
body.append(gameField);