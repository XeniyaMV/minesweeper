import './styles/style.scss';
// import { gameField } from './GameField';
import createHeader from './Header';
import createButton from './Button';
import ProgressBar from './ProgressBar';

const body = document.querySelector('body');
const header = createHeader();
const progressBar = new ProgressBar();
// const buttonStartStopwatch = createButton({
//   title: 'start stopwatch',
//   onClick: () => progressBar.startStopwatch(),
// });
// const buttonPauseStopwatch = createButton({
//   title: 'pause stopwatch',
//   onClick: () => progressBar.pauseStopwatch(),
// });
// const buttonResetStopwatch = createButton({
//   title: 'reset stopwatch',
//   onClick: () => progressBar.resetStopwatch(),
// });
// const buttonIncreaseSteps = createButton({
//   title:'increase steps',
//   onClick: () => progressBar.increaseCountSteps(),
// });
// const buttonDecreaseSteps = createButton({
//   title: 'descrease steps',
//   onClick: () => progressBar.decreaseCountSteps(),
// });
// const buttonIncreaseFlags = createButton({
//   title:'increase flags',
//   onClick: () => progressBar.increaseRemainingFlags(),
// });
// const buttonDecreaseFlags = createButton({
//   title: 'descrease flags',
//   onClick: () => progressBar.decreaseRemainingFlags(),
// });

body.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

body.addEventListener('changeTheme', (e) => {
  progressBar.toggleDarkMode();
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
body.append(progressBar.htmlElement);
// body.append(buttonStartStopwatch);
// body.append(buttonPauseStopwatch);
// body.append(buttonResetStopwatch);
// body.append(buttonIncreaseSteps);
// body.append(buttonDecreaseSteps);
// body.append(buttonIncreaseFlags);
// body.append(buttonDecreaseFlags);
