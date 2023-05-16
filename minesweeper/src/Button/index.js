import './style.scss';

function createButton ({ title, className, onClick }) {
  const button = document.createElement('button');
  button.classList.add('button', className);
  button.textContent = title;
  button.addEventListener('click', onClick);
  console.log(title, className, onClick);
  return button;
}

export { createButton };