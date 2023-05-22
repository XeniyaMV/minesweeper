import './style.scss';
import clock from '../assets/icons/stopwatch.png';
import boot from '../assets/icons/boot.png';

import { createButton } from '../Button';
import { stopWatch } from '../StopWatch';

const progressBar = document.createElement('section');
progressBar.classList.add('progress-bar');

const time = document.createElement('div');
time.classList.add('time-container');
time.innerHTML = `
  <div class = "time-conteiner_icon">
    <img class = "icon" src = ${clock} alt = "stopwatch">
  </div>
`;

const stopwatch = document.createElement('div');
stopwatch.classList.add('time');

const hours = document.createElement('div');
hours.classList.add('time_hours');

const minutes = document.createElement('div');
minutes.classList.add('time_minutes');

const seconds = document.createElement('div');
seconds.classList.add('time_seconds');

stopwatch.append(hours);
stopwatch.append(':');
stopwatch.append(minutes);
stopwatch.append(':');
stopwatch.append(seconds);
time.append(stopwatch);


const button = createButton({ title: 'Play', className: 'progress-bar_button' });
button.addEventListener('click', () => {
  if (button.textContent === 'Pause') {
    stopWatch('pause', seconds, minutes, hours);
    button.textContent = 'Play';
  } else {
    stopWatch('continue', seconds, minutes, hours);
    button.textContent = 'Pause';
  }
})

const counterContainer = document.createElement('div');
counterContainer.classList.add('counter-container');
counterContainer.innerHTML = `
  <div class = "counter-container_icon">
    <img class = "icon" src = ${boot} alt = "boot">
  </div>
`;

const counter = document.createElement('div');
counter.classList.add('counter-container_counter');
counterContainer.append(counter);

progressBar.append(time);
progressBar.append(counterContainer);
progressBar.append(button);


export { progressBar };
