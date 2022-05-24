import removeBook from './remove-book';
import animate from './animate-scroll';
import { callPopup } from './popup-about';
import { dragItem } from './drag-and-drop';

async function getBooks() {
  let res = await fetch('./js/bocks.json');
  let data = await res.json();
  
  addBooks(data);
}

const books = (data) => {
  let booksArray = [];
  let allPage = document.documentElement.clientWidth <= 1170 ? 6 : 4;
  for (let i = 0; i < allPage; i++){
    let res = new Set();
      while (res.size < 10) {
        res.add(data[Math.floor(Math.random() * (9 - 0 + 1)) + 0]);
      }
    res.forEach(i => booksArray.push(i));
  }
  return booksArray;
}

const createBook = (el, arr) => {
  const container = document.querySelector('.books__container');
  const bookItem = document.createElement('div');
  bookItem.classList.add('books__item');

  bookItem.innerHTML = `
    <div class="book anim-item">
      <img src="${el.imageLink}" alt="book" class="book__img" width="286" height="400" data-item="${arr.indexOf(el)}">
      <p class="book__name">${el.title}</p>
      <div class="info">
        <p class="book__cost">${el.price}$</p>
        <div class="book__info button" data-info="${arr.indexOf(el)}">Learn more</div>
      </div>
    </div>
  `;

  let img = bookItem.querySelector('.book__img');
  dragItem(img, arr);
  container.append(bookItem);
}

const addBooks = (data) => {
  let amount = document.documentElement.clientWidth <= 1170 ? 4 : 1;
  const arr = books(data);

  paginations(arr, amount);  
  clickPagination(arr, amount);

}

const paginations = (arr, amount) => {
  const page = document.querySelector('.page-num');

  for (let i = (page.textContent * 10) - 10; i < (page.textContent * 10) - amount; i++) {
    createBook(arr[i], arr);
  }
  callPopup(arr);
}

const eventClick = (arr, amount, button, num) => {
  removeBook();
  paginations(arr, amount);
  setTimeout(() => {animate();});

  if(num.textContent === '1'){
    button[0].classList.add('_not-active');
    button[1].classList.add('_not-active');
  }else {
    button[0].classList.remove('_not-active');
    button[1].classList.remove('_not-active');
  }
  if (num.textContent === `${arr.length / 10}`) {
    button[2].classList.add('_not-active');
    button[3].classList.add('_not-active');
  }else {
    button[2].classList.remove('_not-active');
    button[3].classList.remove('_not-active');
  }
}

const clickPagination = (arr, amount) => {
  const button = document.querySelectorAll('.arrow');
  const num = document.querySelector('.page-num');
  let allPage = document.documentElement.clientWidth <= 1170 ? 6 : 4;

  button.forEach(i => {
    i.addEventListener('click', () =>{
      if (i === button[2] && +num.innerText + 1 <= allPage) {
        num.innerText = Number(num.innerText) + 1;
        eventClick(arr, amount, button, num);
      } else if (i === button[1] && +num.innerText - 1 >= 1) {
        num.innerText = Number(num.innerText) - 1;
        eventClick(arr, amount, button, num);
      } else if (i === button[0] && +num.innerText - 1 >= 1) {
        num.innerText = 1;
        eventClick(arr, amount, button, num);
      } else if (i === button[3] && +num.innerText + 1 <= allPage) {
        num.innerText = allPage;
        eventClick(arr, amount, button, num);
      } 
    });
  })
}

export {getBooks, addBooks};