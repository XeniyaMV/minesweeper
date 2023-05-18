import './style.scss';
import { createHeader } from './Header';
import { gameField } from './GameField';

const body = document.querySelector('body');
body.classList.add('page');
body.append(createHeader());
body.append(gameField);