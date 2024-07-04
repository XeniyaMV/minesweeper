import './style.scss';
import arrow from '../assets/icons/angle-down.svg';

export function createHeader() {
  const header = document.createElement('header');
  const listMenu = document.createElement('ul');
  const burger = document.createElement('ul');
  const innerHeader = `
    <h1 class = "header-title">Minesweeper</h1>
    <nav class = "header-menu">
    </nav>
  `;

  listMenu.classList.add('list-menu');
  burger.classList.add('burger-menu');
  listMenu.innerHTML = `
    <li class = "list-menu_item list-menu_item__level"> 
      <span class= "list-menu_item-title"> Level  <img class = "icon" src = "${arrow}" alt="arrow down"></span>
      <div class = "level-container">
        <div class = "level">
          <select class = "level_select">
            <option value = "10"> Easy </option>
            <option value = "15"> Medium </option>
            <option value = "25"> Hard </option>
          </select>
        </div>
        <div class = "number-mines">
          <label class = "number-mines_label" for = "mines"> Mines </label>
          <input class = "number-mines_input" id = "mines" type = "number" min = "10" max = "99" value="10">
        </div>
      </div>
    </li>
  `;
  burger.innerHTML = `
    <li class = "burger-menu_item"></li>
    <li class = "burger-menu_item"></li>
    <li class = "burger-menu_item"></li>
  `;
  header.classList.add('header');
  header.classList.add('header__main-theme');
  header.innerHTML = innerHeader;
  header.lastElementChild.append(listMenu);
  header.lastElementChild.append(burger);
  burger.addEventListener('click', (event) => {
    burger.classList.toggle('burger-menu__active');
    listMenu.classList.toggle('list-menu__active');
    header.classList.toggle('header__active');
    if (!header.classList.contains('header__active')) {
      header.classList.remove('header__level-open');
      listMenu.querySelector('.level-container').classList.remove('level-container__active');
      listMenu.querySelector('.icon').classList.remove('icon__active');
    }
  });

  return header;
}
