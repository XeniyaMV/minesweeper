// import './style.scss';

function createButton({ title, className, onClick }) {
  const button = document.createElement('button');
  button.className = `button${className ? ` ${className}` : ''}`;
  button.textContent = title;
  button.addEventListener('click', onClick);
  return button;
}

export default createButton;
