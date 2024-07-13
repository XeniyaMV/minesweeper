import bomb from '../assets/icons/bomb-solid-red.svg';
import settingsIconLightTheme from '../assets/icons/settings-light-theme.svg';
import settingsIconDarkTheme from '../assets/icons/settings-dark-theme.svg';
import closeIcon from '../assets/icons/close.svg';
import createButton from '../Button';
import createLevelSelector from './LevelSelector';
import createThemeToggle from './ThemeToggle';
import createSound from './Sound';
import changeLevelTheme from './LevelSelector/changeLevelTheme';
import changeSoundTheme from './Sound/changeSoundTheme';

function createHeader(theme = 'light') {
  const header = document.createElement('header');
  const container = document.createElement('div');
  const title = document.createElement('h1');
  const settings = document.createElement('ul');
  const settingsIconContainer = document.createElement('div');
  const settingsIcon = document.createElement('img');
  const nav = document.createElement('nav');
  const button = createButton({ title: 'New Game', className: 'header__button' });
  let currentTheme = theme;

  header.className = `header header_${currentTheme}-theme`;
  container.className = 'container header__container';
  title.className = 'header__title';
  nav.className = 'header__menu';
  settings.className = 'header__settings';
  settingsIconContainer.className = 'header__settings-icon-container';
  settingsIcon.className = 'header__settings-icon';

  settingsIcon.alt = 'settings icon';
  settingsIcon.src = currentTheme === 'light' ? settingsIconLightTheme : settingsIconDarkTheme;

  title.innerHTML = `Minesweeper <img class="header__title-img" src=${bomb} alt="bomb icon" />`;
  settings.append(createLevelSelector(currentTheme));
  settings.append(createSound(currentTheme));
  settings.append(createThemeToggle(currentTheme));
  settingsIconContainer.append(settingsIcon);
  nav.append(settingsIconContainer);
  nav.append(settings);
  nav.append(button);

  container.append(title);
  container.append(nav);

  header.append(container);

  settingsIconContainer.addEventListener('click', () => {
    const overlay = document.createElement('div');
    const closeButton = createButton({
      className: 'popup__close',
      onClick: () => {
        settings.classList.remove('popup');
        settings.classList.remove('header__popup');
        settings.classList.remove('popup_dark');
        closeButton.remove();
        overlay.remove();
        document.body.classList.remove('body_no-scroll');
      },
    });

    overlay.className = 'overlay';
    closeButton.innerHTML = `<img src=${closeIcon} alt="close icon">`;

    settings.prepend(closeButton);
    settings.classList.add('popup');
    settings.classList.add('header__popup');
    if (currentTheme === 'dark') settings.classList.add('popup_dark');

    document.body.classList.add('body_no-scroll');
    header.append(overlay);
  });

  header.addEventListener('changeTheme', (e) => {
    currentTheme = e.detail.theme();
    changeLevelTheme(currentTheme);
    changeSoundTheme(currentTheme);
    settingsIcon.src = currentTheme === 'light' ? settingsIconLightTheme : settingsIconDarkTheme;
    if (settings.classList.contains('popup')) settings.classList.toggle('popup_dark');
  });

  return header;
}
export default createHeader;
