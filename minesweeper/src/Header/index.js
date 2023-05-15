import './style.scss';
// import menu from '../assets/icons/bomb-solid.svg';

export function createHeader() {
  const header = document.createElement('header');
  const innerHeader = `
    <h1 class = "header-title">Minesweeper</h1>
    <nav class = "header-menu">
      <ul class = "list-menu">
        <li class = "list-menu_item"> Level </li>
        <li class = "list-menu_item"> Screen Theme </li>
        <li class = "list-menu_item"> Rules </li>
      </ul>
      <ul class = "burger-menu">
        <li class = "burger-menu_item"></li>
        <li class = "burger-menu_item"></li>
        <li class = "burger-menu_item"></li>
      </ul>
    </nav>
  `;
  header.classList.add('header');
  header.classList.add('header__main-theme');
  header.innerHTML = innerHeader;
  return header;
}

