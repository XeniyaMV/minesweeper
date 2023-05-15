import './style.scss';
import { createHeader } from './Header';

const body = document.querySelector('body');
body.append(createHeader());