import expandLightTheme from '../../assets/icons/expand-down.svg';
import expandDarkTheme from '../../assets/icons/expand-down-dark-theme.svg';

function changeLevelTheme(theme) {
  const levelOptions = document.querySelector('.level__options');
  const submitLevel = document.querySelector('.level__submit');
  const expand = document.querySelector('.level__expand img');

  if (theme === 'dark') {
    levelOptions.classList.add('level__options_dark');
    submitLevel.classList.add('level__submit_dark');
    expand.src = expandDarkTheme;
  } else {
    levelOptions.classList.remove('level__options_dark');
    submitLevel.classList.remove('level__submit_dark');
    expand.src = expandLightTheme;
  }
}

export default changeLevelTheme;
