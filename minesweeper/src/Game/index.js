import './style.scss';
import { Cell } from "../Cell";
import { stopWatch } from '../StopWatch';
import bomb from '../assets/icons/bomb-solid.svg';

function getSample(n, k, ind) {
  let arrN = [];
  let res = [];
  for (let i = 0; i < n; i++) {
      arrN.push(i);
  }
  arrN.splice(ind, 1);
  for (let i = 0; i < k; i++) {
      let index = Math.floor(Math.random()*arrN.length);
      res.push(arrN[index]);
      arrN.splice(index, 1);
  }
  return res;
}

function showTime(time, timeUnit) {
  return (+time !== 0) ? ` ${+time} ${timeUnit}` : '';
}

function showWin() {
  const records = document.querySelector('.game-field_records-list');
  const h = document.querySelector('.time_hours');
  const m = document.querySelector('.time_minutes');
  const s = document.querySelector('.time_seconds');
  const youWin = document.querySelector('.game-field_you-win');
  const p = document.createElement('p');
  const li = document.createElement('li');
  const darkScreen = document.querySelector('.dark-screen');
  const counter = document.querySelector('.counter-container_counter');
  const title = document.querySelector('.game-field_you-win-title');

  youWin.classList.add('game-field_you-win__active');
  p.classList.add('game-field_you-win-content');
  if (document.querySelector('.game-field_you-win-title')) {
    document.querySelector('.game-field_you-win-title').remove();
  }
  if (document.querySelectorAll('.game-field_you-win-content').length !== 0) {
    document.querySelectorAll('.game-field_you-win-content').forEach((item) => item.remove());
  }
  youWin.insertAdjacentHTML('afterbegin', `
  <h3 class = "game-field_you-win-title"> Hooray!</h3>
  <p class = "game-field_you-win-content"> Would you like to start over? </p>
  `);
  p.innerHTML = `
    You found all mines in${showTime(h.textContent, 'hours')}${showTime(m.textContent, 'minutes')} 
    ${+s.textContent} seconds and ${+counter.textContent} moves!
  `
  youWin.firstElementChild.after(p);
  darkScreen.classList.add('dark-screen__active');
  li.classList.add('game-field_records-list-item');
  li.innerHTML = `
    Time: ${h.textContent} : ${m.textContent} : ${s.textContent}, Steps: ${counter.textContent};
  `;
  if (records.children.length === 10) {
    records.firstElementChild.remove();
  }
  records.append(li);
}

class Game {
  constructor(sizeField, minesNumber) {
    this.sizeField = sizeField;
    this.minesNumber = minesNumber;
    this.cells = [];
    this.htmlElement = document.createElement('div');
    this.countSteps = 0;
    this.countOpens = 0;
    this.clicked = false;
    this.createGame();

    this.htmlElement.addEventListener('click', (event) => {
      let numberCell = event.target.className.search(/[0-9]-[0-9]/);
      const h = document.querySelector('.time_hours');
      const m = document.querySelector('.time_minutes');
      const s = document.querySelector('.time_seconds');
      const button = document.querySelector('.progress-bar_button');
      const counter = document.querySelector('.counter-container_counter');

      numberCell = event.target.className.slice(numberCell, numberCell + 3);
      numberCell = numberCell.split('-').map((item) => +item);
      if (event.target.classList.contains('game-field_cell')) {
        if (!this.clicked) {
          this.initGame(numberCell[0], numberCell[1]);
          this.clicked = true;
          stopWatch('start', s, m, h);
          button.textContent = 'Pause';
          this.countSteps += 1;
          counter.innerHTML = this.countSteps;
          this.dfs(numberCell[0], numberCell[1]);
          if (this.countOpens === this.sizeField * this.sizeField - this.minesNumber) {
            showWin();
            stopWatch('stop', s, m, h);
            button.textContent = 'Play';
            counter.innerHTML = '';
          }
         } else {
          if (button.textContent !== 'Play') {
            if (!this.cells[numberCell[0]][numberCell[1]].isOpened()) {
              this.countSteps += 1;
              counter.innerHTML = this.countSteps;
              if (this.cells[numberCell[0]][numberCell[1]].isMine()) {
                this.showMines();
              }
            }
            this.dfs(numberCell[0], numberCell[1]);
            if (this.countOpens === this.sizeField * this.sizeField - this.minesNumber) {
              showWin();
              stopWatch('stop', s, m, h);
              button.textContent = 'Play';
              counter.innerHTML = '';
            }
          }
        }
      }
    })

  }

  showMines() {
    const display = document.querySelector('.game-field_game-over');
    const darkScreen = document.querySelector('.dark-screen');
    
    for (let i = 0; i < this.sizeField; i++) {
      for (let j = 0; j < this.sizeField; j++) {
        if (this.cells[i][j].isMine()) {
          const iconBomb = document.createElement('div');
          darkScreen.classList.add('dark-screen__active');
          display.classList.add('game-field_game-over__active');
          iconBomb.classList.add('game-field_bomb')
          iconBomb.innerHTML = `
            <img class = "icon" src = "${bomb}" alt = "bomb">
          `;
          this.cells[i][j].htmlElement.classList.add('game-field_cell__mined');
          this.cells[i][j].htmlElement.append(iconBomb);
        }
      }
    }
  }

  dfs(i, j) {
    let queue = [[i, j]];
    for (let k of [-1, 0, 1]) {
      if ((i + k < 0) || (i + k >= this.sizeField)) {
        continue;
      }
      for (let l of [-1, 0, 1]) {
        if ((j + l < 0) || (j + l >= this.sizeField)) {
          continue;
        }
        if (k == 0 && l == 0) {
          continue;
        }
        queue.push([i+k, j+l]);
      }
    }
    while (queue.length) {
      if (this.cells[i][j].isMine()) {
        const counter = document.querySelector('.counter-container_counter');
        counter.innerHTML = '';
        break;
      }
      if (this.cells[i][j].isFlagged()) {
        break;
      }
      if (this.cells[i][j].minesNearby !== 0) {
        if (!this.cells[i][j].isOpened()) {
          this.countOpens += 1;
        }
        this.cells[i][j].htmlElement.classList.add('game-field_cell__opened');
        this.cells[i][j].htmlElement.innerHTML = this.cells[i][j].minesNearby;
        this.cells[i][j].state = 1;
        break;
      }
      const cellIndex = queue.pop();
      if (!this.cells[cellIndex[0]][cellIndex[1]].isOpened()) {
        if (!this.cells[cellIndex[0]][cellIndex[1]].isFlagged()) {
          if (!this.cells[cellIndex[0]][cellIndex[1]].isMine()) {
            this.countOpens += 1;
            this.cells[cellIndex[0]][cellIndex[1]].htmlElement.classList.add('game-field_cell__opened');
            this.cells[cellIndex[0]][cellIndex[1]].state = 1;
            if (this.cells[cellIndex[0]][cellIndex[1]].minesNearby !== 0) {
              this.cells[cellIndex[0]][cellIndex[1]].htmlElement.innerHTML = this.cells[cellIndex[0]][cellIndex[1]].minesNearby;
            }
            this.dfs(...cellIndex);
          }
        }
      }
    }
  }

  setNumberMines () {  
    for (let i = 0; i < this.sizeField; i++) {
      for (let j = 0; j < this.sizeField; j++) {
        let sum = 0;
        for (let k of [-1, 0, 1]) {
          if ((i + k < 0) || (i + k >= this.sizeField)) {
            continue;
          }
          for (let l of [-1, 0, 1]) {
            if ((j + l < 0) || (j + l >= this.sizeField)) {
              continue;
            }
            if (k == 0 && l == 0) {
              continue;
            }
            sum += +this.cells[i+k][j+l].isMine();
          }
        }
        this.cells[i][j].minesNearby = sum;
      }
    }
  }

  createGame() {
    this.htmlElement.classList.add('game-field_game', `game-field_game__${this.sizeField}`);

    for (let i = 0; i < this.sizeField; i += 1) {
      const row = [];
      for (let j = 0; j < this.sizeField;  j += 1) {
        const cell = new Cell(i, j);
        cell.htmlElement.classList.add(`${i}-${j}`);
        row.push(cell);
        this.htmlElement.append(cell.htmlElement);
      }
      this.cells.push(row);
    }
  }

  initGame(row, column) {
    const clickedCell = row * this.sizeField + column;
    const minesIndexes = getSample(this.sizeField * this.sizeField, this.minesNumber, clickedCell);
    for (let n = 0; n < this.minesNumber; n++) {
      const i = Math.floor(minesIndexes[n] / this.sizeField);
      const j = minesIndexes[n] % this.sizeField;
      this.cells[i][j].mine = true;
      // this.cells[i][j].htmlElement.style.backgroundColor = 'red';
    }
    this.setNumberMines();
  }
}

export { Game };