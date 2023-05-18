import './style.scss';
import { Cell } from "../Cell";

//return {htmlElement, [cells]}
function createGame (minesNumber) {
  const htmlGame = document.createElement('div');
  let cells = [];
  
  htmlGame.classList.add('game-field_game', `game-field_game__${minesNumber}`);
  for (let i = 0; i < minesNumber; i += 1) {
    for (let j = 0; j < minesNumber;  j += 1) {
      const cell = new Cell;
      cells.push(cell);
      htmlGame.append(cell.htmlElement);
    }
  }
  return {
    htmlGame,
    cells,
  }
}

function initGame (minesNumber) {{
}}

export { createGame, initGame };