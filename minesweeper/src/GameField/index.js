import './style.scss';

import { progressBar } from '../ProgressBar';

const gameField = document.createElement('main');
gameField.classList.add('gameField');

gameField.append(progressBar);

export { gameField };