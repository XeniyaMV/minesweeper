import GAME_SETTINGS from '../../consts/GAME_SETTINGS';

const changeLevelEvent = new CustomEvent('changeLevel', {
  bubbles: true,
  detail: {
    difficulty: () => GAME_SETTINGS.difficulty,
    mines: () => GAME_SETTINGS.mines,
  },
});

export default changeLevelEvent;
