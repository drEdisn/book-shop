const createCart = () => {
  const header = document.querySelector('.header__menu');
  const cart = document.createElement('div');
  cart.classList.add('cart-container');
  
  cart.innerHTML = `
    <div class="cart-title">My bag</div>
    <div class="cart-content _empty">
          
    </div>
    <div class="cart-other">
      <div class="other-content">
        <span class="total">Total</span>
        <div class="total-cost">0$</div>
      </div>
      <div class="buy-btn button _not-active">Confirm order</div>
    </div>
  `;

  header.append(cart);
}

const addToCart = (data, arr, total) => {
  const cart = document.querySelector('.cart-content');
  const button = document.querySelector('.buy-btn');
  const item = document.createElement('div');
  item.classList.add('cart-item');
  item.setAttribute('data-item', `${arr.indexOf(data)}`);

  item.innerHTML = `
    <div class="item">
      <div class="item__info">
        <h4 class="item__title">${data.title}</h4>
        <h4 class="item__title">${data.author}</h4>
        <span class="item__cost">${data.price}$</span>
      </div>
      <div class="item__amount-container">
        <div class="num-plus input-num">+</div>
        <input class="item__amount" type="number" value="1" min="1" data-item="${arr.indexOf(data)}" readonly>
        <div class="num-minus input-num _not-active">-</div>
      </div>
      <img src="${data.imageLink}" alt="item" class="item__img">
    </div>
    <div class="item__delete button" data-item="${arr.indexOf(data)}">
      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 50 50">
        <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z"/>
      </svg>
    </div>
  `;

  total.innerText = `${Number(total.innerText.replace(/.$/, '')) + data.price}$`;

  if (cart.classList.contains('_empty')) {
    cart.classList.remove('_empty');
    button.classList.remove('_not-active');
  }
  
  cart.append(item);

  const del = item.querySelector('.item__delete');
  del.addEventListener('click', () => {
    eventDeleteCart(del, total, cart, button);
  });

  countItems(true);
  countOneItem(item, total);
}

const eventDeleteCart = (i, total, cart, btn) => {
  const el = document.querySelector('.cart-item[data-item="' + i.dataset.item + '"]');
  let input = document.querySelector('.item__amount[data-item="' + i.dataset.item + '"]');

  total.innerText = `${Number(total.innerText.replace(/.$/, '')) - Number(el.querySelector('.item__cost').innerText.replace(/.$/, '')) * +input.value}$`;
  i.parentElement.remove();
  
  if (cart.childNodes.length <= 1) {
    cart.classList.add('_empty');
    btn.classList.add('_not-active');
  }

  countItems(false);
}

const countItems = (bool) => {
  const count = document.querySelector('._count-items');
  if (bool) {
    count.innerText = +count.innerText + 1;
  } else {
    count.innerText = +count.innerText - 1;
  }
}

const clickToAddCart = (arr) => {
  const button = document.querySelector('.about__add-btn');
  const cart = document.querySelector('.cart-content');
  const total = document.querySelector('.total-cost');
  let array = new Set();

  button.addEventListener('click', () => {
    if (cart.childNodes.length > 1) {
      cart.childNodes.forEach((i, ind) => {ind !== 0 ? array.add(i.dataset.item) : false});
    }

    if (!array.has(button.dataset.cart)){
      addToCart(arr[button.dataset.cart], arr, total);
    } else {
      let input = document.querySelector('.item__amount[data-item="' + button.dataset.cart + '"]');
      const minus = input.parentElement.querySelector('.num-minus');
      input.value = +input.value + 1;
      total.innerText = `${Number(total.innerText.replace(/.$/, '')) + arr[button.dataset.cart].price}$`;
      minus.classList.remove('_not-active');
    }
  });
}

const countOneItem = (item, total) => {
  const plus = item.querySelector('.num-plus');
  const minus = item.querySelector('.num-minus');
  const input = item.querySelector('.item__amount');
  const price = item.querySelector('.item__cost');

  minus.addEventListener('click', () => {
    if (+input.value > 1) {
      input.value = +input.value - 1;
      total.innerText = `${+total.innerText.replace(/.$/, '') - +price.innerText.replace(/.$/, '')}$`;
      +input.value == 1 ? minus.classList.add('_not-active') : null;
    }
  });

  plus.addEventListener('click', () => {
    input.value = +input.value + 1;
    total.innerText = `${+total.innerText.replace(/.$/, '') + +price.innerText.replace(/.$/, '')}$`;
    if (minus.classList.contains('_not-active')) {
      minus.classList.remove('_not-active');
    }
  })
}

const toConfirm = () => {
  const button = document.querySelector('.buy-btn');

  button.addEventListener('click', () => {
    if (!button.classList.contains('_not-active')) {
      window.location.href = './confirm.html';
    }
  })
}

export {createCart, clickToAddCart, addToCart, countItems, toConfirm};