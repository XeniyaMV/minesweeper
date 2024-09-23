// import './style.scss';
// import clock from '../assets/icons/stopwatch.png';
// import boot from '../assets/icons/boot.png';

// import { createButton } from '../Button';
// import { stopWatch } from '../StopWatch';

// const progressBar = document.createElement('section');
// progressBar.classList.add('progress-bar');

// const time = document.createElement('div');
// time.classList.add('time-container');
// time.innerHTML = `
//   <div class = "time-conteiner_icon">
//     <img class = "icon" src = ${clock} alt = "stopwatch">
//   </div>
// `;

// const stopwatch = document.createElement('div');
// stopwatch.classList.add('time');

// const hours = document.createElement('div');
// hours.classList.add('time_hours');

// const minutes = document.createElement('div');
// minutes.classList.add('time_minutes');

// const seconds = document.createElement('div');
// seconds.classList.add('time_seconds');

// stopwatch.append(hours);
// stopwatch.append(':');
// stopwatch.append(minutes);
// stopwatch.append(':');
// stopwatch.append(seconds);
// time.append(stopwatch);

// const button = createButton({ title: 'Play', className: 'progress-bar_button' });
// button.addEventListener('click', () => {
//   if (button.textContent === 'Pause') {
//     stopWatch('pause', seconds, minutes, hours);
//     button.textContent = 'Play';
//   } else {
//     stopWatch('continue', seconds, minutes, hours);
//     button.textContent = 'Pause';
//   }
// });

// const counterContainer = document.createElement('div');
// counterContainer.classList.add('counter-container');
// counterContainer.innerHTML = `
//   <div class = "counter-container_icon">
//     <img class = "icon" src = ${boot} alt = "boot">
//   </div>
// `;

// const counter = document.createElement('div');
// counter.classList.add('counter-container_counter');
// counterContainer.append(counter);

// progressBar.append(time);
// progressBar.append(counterContainer);
// progressBar.append(button);

// export { progressBar };

import Stopwatch from '../Stopwatch';

import stepsIcon from '../assets/icons/steps.svg';
import flagIcon from '../assets/icons/flag.svg';

class ProgressBar {
  constructor (hours = 0, minutes = 0, seconds = 0, countFlags = 0, countSteps = 0) {
    this.stopwatch = new Stopwatch(hours, minutes, seconds);
    this.countSteps = countSteps;
    this.countStepsHTMLElement = this.initProgressbarUnit(countSteps);
    this.remainingFlags = countFlags;
    this.remainingFlagsHTMLElement = this.initProgressbarUnit(countFlags);
    this.htmlElement = null;

    this.buildHtmlElement();
  }

  initProgressbarUnit(unitValue) {
    const unitContainer = document.createElement('div');

    unitContainer.className = 'progress-bar__unit';

    unitContainer.innerHTML = unitValue ?? 0;
    return unitContainer;
  }

  buildHtmlElement() {
    const progressBar = document.createElement('article');
    const stepsContainer = document.createElement('div');
    const remainingFlagsContainer = document.createElement('div');

    progressBar.className = 'progress-bar';
    stepsContainer.className = 'progress-bar__unit-container';
    remainingFlagsContainer.className = 'progress-bar__unit-container';

    stepsContainer.innerHTML = `<img class="progress-bar__unit-icon" src=${stepsIcon} alt="progress bar steps icon" />`
    remainingFlagsContainer.innerHTML = `<img class="progress-bar__unit-icon" src=${flagIcon} alt="progress bar flag icon" />`

    stepsContainer.append(this.countStepsHTMLElement);
    remainingFlagsContainer.append(this.remainingFlagsHTMLElement);
    progressBar.append(this.stopwatch.htmlElement);
    progressBar.append(remainingFlagsContainer);
    progressBar.append(stepsContainer);

    this.htmlElement = progressBar;
  }

  toggleDarkMode() {
    this.htmlElement.classList.toggle('progress-bar_dark');
    this.countStepsHTMLElement.classList.toggle('progress-bar__unit_dark');
    this.remainingFlagsHTMLElement.classList.toggle('progress-bar__unit_dark');
    this.stopwatch.toggleDarkMode();
  }

  startStopwatch () {
    this.stopwatch.start();
  }

  pauseStopwatch() {
    this.stopwatch.pause();
  }

  resetStopwatch() {
    this.stopwatch.reset();
  }

  increaseCountSteps() {
    this.countSteps += 1;
    this.countStepsHTMLElement.innerHTML = this.countSteps;
  }

  decreaseCountSteps() {
    this.countSteps -= 1;
    this.countStepsHTMLElement.innerHTML = this.countSteps;
  }

  increaseRemainingFlags() {
    this.remainingFlags += 1;
    this.remainingFlagsHTMLElement.innerHTML = this.remainingFlags;
  }

  decreaseRemainingFlags() {
    this.remainingFlags -= 1; 
    this.remainingFlagsHTMLElement.innerHTML = this.remainingFlags;
  }

  resetProgressBar(remainingFlags) {
    this.stopwatch.reset();
    this.countSteps = 0;
    this.remainingFlags = remainingFlags ?? 10;
  }
}

export default ProgressBar;
