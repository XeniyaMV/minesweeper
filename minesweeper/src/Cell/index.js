// import './style.scss';
import flag from '../assets/icons/flag.svg';

class Cell {
  constructor(i, j) {
    // state = 0 - unopened, state = 1 -opened, state = 2 - flagged;
    // this.state = 0;
    // this.mine = false;
    this.isMined = false;
    this.isFlagged = false;
    this.isOpened = false;
    this.isActive = false;
    this.minesNearby = 0;
    this.i = i;
    this.j = j;
    this.htmlElement = null;
    this.buildHtml();

    this.htmlElement.addEventListener('click', () => {
      // const button = document.querySelector('.progress-bar_button');
      // if (this.isMine()) {
      //   if (!this.isFlagged()) {
      //     if (button.textContent !== 'Play') {
      //       const h = document.querySelector('.time_hours');
      //       const m = document.querySelector('.time_minutes');
      //       const s = document.querySelector('.time_seconds');
      //       stopWatch('stop', s, m, h);
      //     }
      //   }
      // }
      if (this.isActive && !this.isFlagged) {
        this.setIsOpened(true);
      }
    });

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
    });
  }

  buildHtml() {
    const cell = document.createElement('div');
    // cell.classList.add('game-field_cell');
    cell.className = 'game__cell';
    this.htmlElement = cell;
  }

  setIsMined(value) {
    this.isMined = value;
    if (value) {
      const bombIcon = document.createElement('img');
      this.htmlElement.append(bombIcon);
    }
  }

  setIsFlagged(value) {
    this.isFlagged = value;
  }

  setIsOpened(value) {
    this.isOpened = value;
  }

  // isOpened() {
  //   return (this.state == 1);
  // }

  // isFlagged() {
  //   return (this.state == 2);
  // }

  // isMine() {
  //   return this.mine;
  // }
}

export default Cell;
