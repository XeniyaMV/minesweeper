import './style.scss';
import bomb from '../assets/icons/bomb-solid.svg';
import flag from '../assets/icons/flag.svg';
import { stopWatch } from '../StopWatch';

class Cell {
  constructor (i, j) {
    // state = 0 - unopened, state = 1 -opened, state = 2 - flagged;
    this.state = 0;
    this.mine = false;
    this.minesNearby = 0;
    this.i = i;
    this.j = j;
    this.htmlElement = null;

    this.buildHtml();
  }

  buildHtml() {
    const cell = document.createElement('div');
    cell.classList.add('game-field_cell');
    this.htmlElement = cell;

    this.htmlElement.addEventListener('click', (event) => {
      const button = document.querySelector('.progress-bar_button');
      if (this.isMine()) {
        if (!this.isFlagged()) {
          if (button.textContent !== 'Play') {
            const h = document.querySelector('.time_hours');
            const m = document.querySelector('.time_minutes');
            const s = document.querySelector('.time_seconds');
            stopWatch('stop', s, m, h);
          }
        }
      }
    })

    this.htmlElement.addEventListener('contextmenu', (event) => {
      if (!this.isOpened() && !this.isFlagged()) {
        const iconFlag = document.createElement('div');
        iconFlag.classList.add('game-field_flag');
        iconFlag.innerHTML = `
        <img class = "icon" src = "${flag}" alt = "flag">
        `;
        this.htmlElement.classList.add('game-field_cell__flagged');
        this.htmlElement.append(iconFlag);
        this.state = 2;
      } else if (this.isFlagged()) {
        this.htmlElement.classList.remove('game-field_cell__flagged');
        this.htmlElement.innerHTML = '';
        this.state = 0;
      }
    })
  }

  isOpened () {
    return (this.state == 1) ? true : false; 
  }

  isFlagged () {
    return (this.state == 2) ? true : false;
  }

  isMine () {
    return this.mine;
  }
}

export { Cell };