import sunLightTheme from '../../assets/icons/sun-light-theme.svg';
import sunDarkTheme from '../../assets/icons/sun-dark-theme.svg';
import moonLightTheme from '../../assets/icons/moon-light-theme.svg';
import moonDarkTheme from '../../assets/icons/moon-dark-theme.svg';

import changeThemeEvent from './changeThemeEvent';
import GAME_SETTINGS from '../../consts/GAME_SETTINGS';

function createThemeToggle(theme = 'light') {
  const toggleContainer = document.createElement('li');
  const sun = document.createElement('img');
  const moon = document.createElement('img');
  const toggle = document.createElement('label');
  const slider = document.createElement('span');
  const thumb = document.createElement('input');
  let currentTheme = theme;

  thumb.type = 'checkbox';
  thumb.checked = currentTheme === 'dark';
  sun.alt = 'sun icon';
  moon.alt = 'moon icon';
  sun.src = currentTheme === 'light' ? sunLightTheme : sunDarkTheme;
  moon.src = currentTheme === 'light' ? moonLightTheme : moonDarkTheme;

  toggleContainer.className = 'toggle__container';
  toggle.className = 'toggle';
  slider.className = 'toggle__slider';
  thumb.className = 'toggle__thumb';

  toggle.append(thumb);
  toggle.append(slider);

  toggleContainer.append(sun);
  toggleContainer.append(toggle);
  toggleContainer.append(moon);

  thumb.addEventListener('click', (e) => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    sun.src = currentTheme === 'light' ? sunLightTheme : sunDarkTheme;
    moon.src = currentTheme === 'light' ? moonLightTheme : moonDarkTheme;

    GAME_SETTINGS.theme = currentTheme;
    e.target.dispatchEvent(changeThemeEvent);
  });

  return toggleContainer;
}

export default createThemeToggle;
