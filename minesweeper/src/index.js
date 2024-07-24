import './styles/style.scss';
// import { gameField } from './GameField';
import createHeader from './Header';
import Stopwatch from './Stopwatch';
import createButton from './Button';

const body = document.querySelector('body');
const header = createHeader();
const stopwatch = new Stopwatch(0, 0, 0);

body.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

body.addEventListener('changeTheme', (e) => {
  stopwatch.toggleDarkMode();
  if (e.detail.theme() === 'dark') {
    body.classList.add('body_dark');
  } else {
    body.classList.remove('body_dark');
  }
});

body.addEventListener('changeLevel', (e) => {
  console.log('Mines: ', e.detail.mines(), 'Difficulty: ', e.detail.difficulty());
});

// body.append(gameField);

body.append(header);
body.append(stopwatch.htmlElement);
