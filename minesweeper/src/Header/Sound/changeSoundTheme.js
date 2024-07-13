import soundLightTheme from '../../assets/icons/sound-light-theme.svg';
import soundDarkTheme from '../../assets/icons/sound-dark-theme.svg';
import soundMuteLightTheme from '../../assets/icons/sound-mute-light-theme.svg';
import soundMuteDarkeTheme from '../../assets/icons/sound-mute-dark-theme.svg';

function changeSoundTheme(theme) {
  const soundIcon = document.querySelector('.sound__icon');
  const isSoundOn = !soundIcon.alt.includes('mute');
  if (theme === 'light') {
    soundIcon.classList.remove('sound__icon_dark');
    soundIcon.src = isSoundOn ? soundLightTheme : soundMuteLightTheme;
  } else {
    soundIcon.classList.add('sound__icon_dark');
    soundIcon.src = isSoundOn ? soundDarkTheme : soundMuteDarkeTheme;
  }
}

export default changeSoundTheme;
