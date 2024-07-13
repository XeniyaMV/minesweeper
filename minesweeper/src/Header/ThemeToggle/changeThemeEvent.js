import GAME_SETTINGS from '../../consts/GAME_SETTINGS';

const changeThemeEvent = new CustomEvent('changeTheme', {
  bubbles: true,
  detail: {
    theme: () => GAME_SETTINGS.theme,
  },
});

export default changeThemeEvent;
