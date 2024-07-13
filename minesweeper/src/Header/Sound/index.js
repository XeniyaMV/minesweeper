import soundLightTheme from '../../assets/icons/sound-light-theme.svg';
import soundDarkTheme from '../../assets/icons/sound-dark-theme.svg';
import soundMuteLightTheme from '../../assets/icons/sound-mute-light-theme.svg';
import soundMuteDarkeTheme from '../../assets/icons/sound-mute-dark-theme.svg';
import GAME_SETTINGS from '../../consts/GAME_SETTINGS';

function createSound(isSoundOn = true, theme = 'light') {
  const soundContainer = document.createElement('li');
  const soundIcon = document.createElement('img');
  let sound = isSoundOn;

  soundContainer.className = 'sound';
  soundIcon.className = 'sound__icon';

  soundIcon.alt = 'sound icon';
  if (theme === 'light') {
    soundIcon.src = isSoundOn ? soundLightTheme : soundMuteLightTheme;
  } else {
    soundIcon.classList.add('sound__icon_dark');
    soundIcon.src = isSoundOn ? soundDarkTheme : soundMuteDarkeTheme;
  }

  soundIcon.addEventListener('click', () => {
    const { theme: currentTheme } = GAME_SETTINGS;
    sound = !sound;
    GAME_SETTINGS.sound = sound;
    soundIcon.alt = sound ? 'sound icon' : 'sound mute icon';
    if (currentTheme === 'light') {
      soundIcon.src = sound ? soundLightTheme : soundMuteLightTheme;
    } else {
      soundIcon.src = sound ? soundDarkTheme : soundMuteDarkeTheme;
    }
  });

  soundContainer.append(soundIcon);
  return soundContainer;
}

export default createSound;
