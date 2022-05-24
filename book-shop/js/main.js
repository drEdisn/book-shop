import createHeader from './create-header';
import createHome from './home';
import createFooter from './footer';
import animate from './animate-scroll';
import createBookSection from './book-section';
import {getBooks} from './add-book';
import {createCart, toConfirm} from './cart';
import { createDropArea } from './drag-and-drop';
import { invalidAll, checkDate, checkFlat, checkHome, checknameKey, checkStreet, checkAllInput, confirmClick, createInfo } from './confirm';

const container = document.querySelector('.container');

const createMain = (container) => {
  const main = document.createElement('main');
  main.classList.add('main');
  container.append(main);
}

if (container) {
  createHeader(container);
  createDropArea();
  createCart();
  createMain(container);
  createHome();
  createBookSection();
  createFooter(container);
  getBooks();
  toConfirm();
  window.addEventListener('scroll', () => {animate();})
  window.onload = () => {
    if (sessionStorage.getItem('confirm') == 'true') {
      sessionStorage.setItem('confirm', 'false');
      createInfo(container);
    }
  }
  setTimeout(() => {animate();});
} else {
  checknameKey();
  checkDate();
  checkStreet();
  checkHome();
  checkFlat();
  invalidAll();
  checkAllInput();
  confirmClick();
}


