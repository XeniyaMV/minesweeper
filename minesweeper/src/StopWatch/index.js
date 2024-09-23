// let h;
// let m;
// let s;
// let start;

// function startInterval() {
//   const sec = +s.innerHTML;
//   if (sec + 1 >= 60) {
//     const min = +m.innerHTML;
//     if (min + 1 >= 60) {
//       const hour = +h.innerHTML;
//       h.innerHTML = (hour + 1 <= 9) ? `0${hour + 1}` : hour + 1;
//       m.innerHTML = '00';
//       s.innerHTML = '00';
//     } else {
//       m.innerHTML = (min + 1 <= 9) ? `0${min + 1}` : min + 1;
//       s.innerHTML = '00';
//     }
//   } else {
//     s.innerHTML = (sec + 1 <= 9) ? `0${sec + 1}` : sec + 1;
//   }
// }

// function stopWatch(state, sec, min, hour) {
//   h = hour;
//   m = min;
//   s = sec;
//   if (state === 'start') {
//     h.innerHTML = '00';
//     m.innerHTML = '00';
//     s.innerHTML = '00';
//     start = setInterval(startInterval, 1000);
//   }
//   if (state === 'pause') {
//     clearInterval(start);
//   }
//   if (state === 'continue') {
//     if (h.innerHTML === '') {
//       h.innerHTML = '00';
//       m.innerHTML = '00';
//       s.innerHTML = '00';
//     }
//     start = setInterval(startInterval, 1000);
//   }
//   if (state === 'stop') {
//     h.innerHTML = '00';
//     m.innerHTML = '00';
//     s.innerHTML = '00';
//     clearInterval(start);
//   }
// }

// export { stopWatch };

import stopwatchIcon from '../assets/icons/stopwatch.png';

class Stopwatch {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.hoursHtml = this.initTimeUnit(hours);
    this.minutesHtml = this.initTimeUnit(minutes);
    this.secondsHtml = this.initTimeUnit(seconds);
    this.htmlElement = null;
    this.timeInterval = null;
    this.runTime = this.runTime.bind(this);

    this.buildHtmlElement();
  }

  formatTime(time) {
    return time < 10 ? `0${time}` : time.toString();
  }

  initTimeUnit(unitValue) {
    const unitContainer = document.createElement('div');

    unitContainer.className = 'stopwatch__unit';

    unitContainer.innerHTML = this.formatTime(unitValue);
    return unitContainer;
  }

  buildHtmlElement() {
    const stopwatch = document.createElement('section');
    const stopwatchContainer = document.createElement('div');

    stopwatch.className = 'stopwatch';
    stopwatchContainer.className = 'stopwatch__container';
    stopwatch.innerHTML = `<img class="stopwatch__icon" src=${stopwatchIcon} alt="stopwatch icon" />`;

    stopwatchContainer.append(this.hoursHtml);
    stopwatchContainer.append(':');
    stopwatchContainer.append(this.minutesHtml);
    stopwatchContainer.append(':');
    stopwatchContainer.append(this.secondsHtml);
    stopwatch.append(stopwatchContainer);

    this.htmlElement = stopwatch;
  }

  toggleDarkMode() {
    this.htmlElement.classList.toggle('stopwatch_dark');
    this.secondsHtml.classList.toggle('stopwatch__unit_dark');
    this.minutesHtml.classList.toggle('stopwatch__unit_dark');
    this.hoursHtml.classList.toggle('stopwatch__unit_dark');
  }

  runTime() {
    if (this.seconds + 1 >= 60) {
      if (this.minutes + 1 >= 60) {
        this.seconds = 0;
        this.minutes = 0;
        this.hours += 1;
        this.secondsHtml.innerHTML = this.formatTime(this.seconds);
        this.minutesHtml.innerHTML = this.formatTime(this.minutes);
        this.hoursHtml.innerHTML = this.formatTime(this.hours);
      } else {
        this.seconds = 0;
        this.minutes += 1;
        this.secondsHtml.innerHTML = this.formatTime(this.seconds);
        this.minutesHtml.innerHTML = this.formatTime(this.minutes);
      }
    } else {
      this.seconds += 1;
      this.secondsHtml.innerHTML = this.formatTime(this.seconds);
    }
  }

  start() {
    this.timeInterval = setInterval(this.runTime, 1000);
  }

  pause() {
    clearInterval(this.timeInterval);
  }

  reset() {
    this.pause();
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.secondsHtml.innerHTML = this.formatTime(this.seconds);
    this.minutesHtml.innerHTML = this.formatTime(this.minutes);
    this.hoursHtml.innerHTML = this.formatTime(this.hours);
  }
}

export default Stopwatch;
