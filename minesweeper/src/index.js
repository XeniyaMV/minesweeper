import './styles/style.scss';
// import { gameField } from './GameField';
import createHeader from './Header';

const body = document.querySelector('body');
body.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

body.addEventListener('changeTheme', (e) => {
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
const header = createHeader();
body.append(header);
