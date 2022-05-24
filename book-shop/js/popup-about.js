import { clickToAddCart } from "./cart";

const createPopup = (data, arr) => {
  const container = document.querySelector('.container');
  const body = document.querySelector('.body');
  const popupWindow = document.createElement('div');
  const overflow = document.createElement('div');
  overflow.classList.add('overview');
  popupWindow.classList.add('popup');
  popupWindow.classList.add('anim-item');

  popupWindow.innerHTML = `
    <div class="popup__close-btn button">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
        <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z"/>
      </svg>
    </div>
    <div class="popup__container">
      <img class="popup__img" src="${data.imageLink}">
      <div class="about">
        <p class="about__title">${data.title}</p>
        <p class="about__author">${data.author}</p>
        <div class="cost-container">
          <span class="about__cost-text">PRICE:</span>
          <span class="about__cost">${data.price}$</span>
        </div>
        <div class="about__add-btn button" data-cart="${arr.indexOf(data)}">ADD TO CART</div>
        <p class="about__desctipt">${data.description}</p>
      </div>
    </div>
  `;

  body.append(overflow);
  container.append(popupWindow);
  setTimeout(() => {popupWindow.classList.add('_active')});

  const close = document.querySelector('.popup__close-btn');

  [close, overflow].forEach(i => {
    i.addEventListener('click', () => {
      popupWindow.classList.remove('_active');
      document.querySelector('.overview').remove();
      body.classList.remove('overflow');
      setTimeout(() => {document.querySelector('.popup').remove();}, 200);
    })
  });
}

const callPopup = (arr) => {
  const button = document.querySelectorAll('.book__info');
  const body = document.querySelector('.body');

  button.forEach(i => {
    i.addEventListener('click', () => {
      createPopup(arr[i.dataset.info], arr);
      body.classList.add('overflow');
      clickToAddCart(arr);
    });
  });
}

export {callPopup};