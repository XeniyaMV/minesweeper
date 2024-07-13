import closeIcon from '../assets/icons/close.svg';
import createButton from '../Button';

function createPopup({
  isOpened, element, theme, className,
}) {
  const popup = document.createElement('article');
  const closeButton = createButton({ className: 'popup__close' });

  popup.className = `popup${theme === 'dark' ? ' popup_dark' : ''}${!isOpened ? ' popup_hide' : ''}`;
  if (className) popup.classList.add(className);
  closeButton.innerHTML = `<img src=${closeIcon} alt="close icon">`;

  popup.append(closeButton);
  popup.append(element);
  closeButton.addEventListener('click', () => popup.remove());

  return popup;
}

export default createPopup;
