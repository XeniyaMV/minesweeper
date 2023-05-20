import './style.scss';

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
    <li class = "list-menu_item"> Level </li>
    <li class = "list-menu_item"> Screen Theme </li>
    <li class = "list-menu_item"> Rules </li>
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
    const page = document.querySelector('.page');
    burger.classList.toggle('burger-menu__active');
    listMenu.classList.toggle('list-menu__active');
    header.classList.toggle('header__active');
    page.classList.toggle('page__active');
  });
  return header;
}

