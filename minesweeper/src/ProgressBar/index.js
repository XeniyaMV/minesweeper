import './style.scss';
import clock from '../assets/icons/stopwatch.png';
import boot from '../assets/icons/boot.png';

import { createButton } from '../Button';

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

const hours = document.createElement('input');
hours.type = 'text';
hours.classList.add('time_hours');

const minutes = document.createElement('input');
minutes.type = 'text';
minutes.classList.add('time_minutes');

const seconds = document.createElement('input');
seconds.type = 'text';
seconds.classList.add('time_seconds');

stopwatch.append(hours);
stopwatch.append(':');
stopwatch.append(minutes);
stopwatch.append(':');
stopwatch.append(seconds);
time.append(stopwatch);


const button = createButton({ title: 'Start', className: 'progress-bar_button' });

const counterContainer = document.createElement('div');
counterContainer.classList.add('counter-container');
counterContainer.innerHTML = `
  <div class = "counter-container_icon">
    <img class = "icon" src = ${boot} alt = "boot">
  </div>
`;

const counter = document.createElement('input');
counter.type = 'text';
counter.classList.add('counter-container_counter');
counterContainer.append(counter);

progressBar.append(time);
progressBar.append(button);
progressBar.append(counterContainer);


export { progressBar };
