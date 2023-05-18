import './style.scss';

class Cell {
  constructor () {
    // state = 0 - unopened, state = 1 -opened, state = 2 - flagged;
    this.state = 0;
    this.mine = false;
    this.minesNearby = 0;
    this.htmlElement = null;

    this.buildHtml();
  }

  buildHtml() {
    const cell = document.createElement('div');
    cell.classList.add('game-field_cell');
    this.htmlElement = cell;
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