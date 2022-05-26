import createHeader from './create-header';
import createHome from './home';
import createFooter from './footer';
import animate from './animate-scroll';
import createBookSection from './book-section';
import {getBooks} from './add-book';
import {toConfirm} from './cart';
import { createDropArea } from './drag-and-drop';
import * as confirm from './confirm';

const body = document.querySelector('.body');
const container = document.createElement('div');
container.classList.add('container');

const createMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');
  main.append(createHome(), createBookSection());
  return main;
}

if (!body.classList.contains('confirm')) {
  container.append(createHeader(), createDropArea(), createMain(), createFooter());
  body.append(container);
  getBooks();
  toConfirm();
  window.addEventListener('scroll', () => {animate();})
  window.onload = () => {
    if (sessionStorage.getItem('confirm') == 'true') {
      sessionStorage.setItem('confirm', 'false');
      confirm.createInfo(container);
    }
  }
  setTimeout(() => {animate();});
} else {
  const arr = ['checknameKey', 'checkDate', 'checkStreet', 'checkHome', 'checkFlat', 'checkAllInput', 'invalidAll', 'confirmClick'];
  arr.forEach((i,ind,arr) => confirm[arr[ind]]())
}


