import createButton from '../../Button';
import changeLevelEvent from './changeLevelEvent';
import expandIconLight from '../../assets/icons/expand-down.svg';
import expandIconDark from '../../assets/icons/expand-down-dark-theme.svg';
import GAME_SETTINGS from '../../consts/GAME_SETTINGS';

function createLevelSelector(theme = 'light') {
  const levelContainer = document.createElement('li');
  const title = document.createElement('span');
  const expand = document.createElement('button');
  const optionsContainer = document.createElement('ul');
  const difficultyOption = document.createElement('li');
  const minesOption = document.createElement('li');
  const select = document.createElement('select');
  const inputMines = document.createElement('input');
  const submit = createButton({
    title: 'Ok',
    className: `level__submit${theme === 'dark' ? ' level__submit_dark' : ''}`,
    onClick: (e) => {
      optionsContainer.classList.toggle('level__options_hidden');
      expand.classList.toggle('level__expand_hide');
      GAME_SETTINGS.difficulty = select.value;
      GAME_SETTINGS.mines = inputMines.value;
      e.target.dispatchEvent(changeLevelEvent);
    },
  });

  levelContainer.className = 'level';
  title.className = 'level__title';
  expand.className = 'button level__expand';
  optionsContainer.className = `level__options level__options_hidden${theme === 'dark' ? ' level__options_dark' : ''}`;
  difficultyOption.className = 'level__option';
  minesOption.className = 'level__option';
  select.className = 'level__select';
  inputMines.className = 'level__input';

  select.id = 'difficulty';
  inputMines.id = 'mines';
  inputMines.type = 'number';
  inputMines.min = '10';
  inputMines.max = '99';
  inputMines.value = '10';

  title.textContent = 'Level';
  expand.innerHTML = `<img src=${theme === 'dark' ? expandIconDark : expandIconLight} alt="expand icon"/>`;
  select.innerHTML = `
    <option value = "10"> Easy </option>
    <option value = "15"> Medium </option>
    <option value = "25"> Hard </option>
  `;
  difficultyOption.innerHTML = '<label for="difficulty">Difficulty:</label>';
  minesOption.innerHTML = '<label for="mines">Mines:</label>';

  expand.addEventListener('click', () => {
    optionsContainer.classList.toggle('level__options_hidden');
    expand.classList.toggle('level__expand_hide');
  });

  title.append(expand);
  difficultyOption.append(select);
  minesOption.append(inputMines);
  optionsContainer.append(difficultyOption, minesOption);
  optionsContainer.append(submit);

  levelContainer.append(title, optionsContainer);

  return levelContainer;
}

export default createLevelSelector;
