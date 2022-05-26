const checknameKey = () => {
  const input = document.querySelectorAll('.form__name');
  input.forEach(i => i.addEventListener('input', () => {
    i.value = i.value.replace(/[^a-zа-яё\s]/gi, '');
    invalidInput();
  }))
}

const checkDate = () => {
  const date = document.querySelector('.form__date');

  date.addEventListener('input', (e) => {
    let val = new Date(Date.parse(date.value));
    let dateNow = new Date()
    dateNow.setDate(dateNow.getDate()+1, dateNow.setHours(0), dateNow.setMinutes(0), dateNow.setSeconds(0), dateNow.setMilliseconds(0));
    val.setHours(0);

    if (val < dateNow) {
      date.value = '';
    }
    invalidInput();
  })
}

const checkStreet = () => {
  const street = document.querySelector('.form__street');

  street.addEventListener('input', () => {
    street.value = street.value.replace(/[^a-zа-яё0-9\s]/gi, '');
    invalidInput();
  })
}

const checkHome = () => {
  const num = document.querySelector('.form__home-num');

  num.addEventListener('input', () => {
    num.value = num.value.replace(/[^0-9]/g, '');
    invalidInput();
  })
}

const checkFlat = () => {
  const flat = document.querySelector('.form__flat');

  flat.addEventListener('input', () => {
    if (flat.value.length == 1) {
      flat.value = flat.value.replace(/[^0-9]/g, '');
    } else if (flat.value.split('')[0] == "-") {
      flat.value = flat.value.replace(/-/, '');
    } else {
      flat.value = flat.value.replace(/[^0-9-]/g, '');
    }
    invalidInput();
  })
}

const invalidInput = () => {
  const input = document.querySelectorAll('.inp');
  const inpAll = document.querySelectorAll('input.inp:valid');
  const button = document.querySelector('.hover-confirm');
  const inpValid = document.querySelectorAll('input.form__pay:valid');

  input.forEach(i => {
    const el = i.parentElement.querySelector('.invalid');
    if (i.checkValidity()) {
      el.classList.add('valid');
    } else {
      el.classList.remove('valid');
    }
  })

  if (inpAll.length == 6 && inpValid.length == 2) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

const invalidAll = () => {
  const input = document.querySelectorAll('.inp');
  const inp = document.querySelector('.pay-type');
  const pay = document.querySelectorAll('.form__pay');

  input.forEach(i => {
    const span = document.createElement('span');
    span.classList.add('invalid');
    span.innerText = '*Invalid field';
    i.parentElement.append(span);
  })

  const span = document.createElement('span');
  span.classList.add('invalid');
  span.innerText = '*Invalid field';
  inp.append(span);

  pay.forEach(i => i.addEventListener('input', () => {
    if (i.checked) {
      inp.childNodes[1].classList.add('valid');
      invalidInput();
    }
  }))
}

const checkAllInput = () => {
  const checkbox = document.querySelectorAll('.checkbox');

  checkbox.forEach(i => i.addEventListener('input', () => {
    let arr = [];
    checkbox.forEach(el => {
      if (el.checked) {
        arr.push('sas');
      }
      if (arr.length == 2) {
        checkbox.forEach(it => !it.checked ? it.setAttribute('disabled', '') : null);
      } else {
        checkbox.forEach(it => it.removeAttribute('disabled'));
      }
    })
  }))
}

const confirmClick = () => {
  const button = document.querySelector('.hover-confirm');

  button.addEventListener('click', () => {
    const input = document.querySelectorAll('.inp');
    sessionStorage.setItem('confirm', `true`);
    sessionStorage.setItem('name', `${input[0].value}`);
    sessionStorage.setItem('surname', `${input[1].value}`);
    sessionStorage.setItem('street', `${input[2].value}`);
    sessionStorage.setItem('home', `${input[3].value}`);
    sessionStorage.setItem('date', `${input[5].value}`);
    window.location.href = './index.html';
  })
}

const createInfo = (container) => {
  const info = document.createElement('div');
  info.classList.add('confirm-info');
  info.innerHTML = `
    <h4 class="confirm-info__title">Order completed</h4>
    <div class="confirm-info__name">To whom: ${sessionStorage.getItem('name')} ${sessionStorage.getItem('surname')}</div>
    <div class="confirm-info__street">Where: ${sessionStorage.getItem('street')} ${sessionStorage.getItem('home')}</div>
    <div class="confirm-info__date">Delivery date: ${sessionStorage.getItem('date')}</div>
  `;

  container.append(info);
  setTimeout(() => {info.remove()}, 2000);
}

export {checknameKey, checkDate, checkStreet, checkHome, checkFlat, checkAllInput, invalidAll, confirmClick, createInfo};