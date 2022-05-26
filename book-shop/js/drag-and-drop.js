import { addToCart} from "./cart";


const createDropArea = () => {
  const dropArea = document.createElement('div');
  dropArea.classList.add('drop-area');
  return dropArea;
}

const moveAt = (e) => {
  const dropItem = document.querySelector('.drop-item');
  dropItem.style.left = e.pageX - dropItem.offsetWidth / 2 + 'px';
  dropItem.style.top = e.pageY - dropItem.offsetHeight / 2 + 'px';
}

const createDropItem = (img) => {
  const container = document.querySelector('.container');
  const dropItem = document.createElement('div');
  dropItem.classList.add('drop-item');
  dropItem.style.backgroundImage = `url('${img.src}')`;
  dropItem.setAttribute('data-item', `${img.dataset.item}`)
  container.append(dropItem);
}

const dragItem = (img, arr) => {
  const drop = document.querySelector('.drop-area');
  const total = document.querySelector('.total-cost');
  const cart = document.querySelector('.cart-content');
  

  img.onmousedown = (e) => {
    drop.classList.add('_drop-up');
    createDropItem(img);
    moveAt(e);
    document.onmousemove = function(e) {
      moveAt(e);
    }
  }

  img.ondragstart = function() {
    return false;
  };

  document.onmouseup = (e) => {
    const dropItem = document.querySelector('.drop-item');
    drop.classList.remove('_drop-up');
    document.onmousemove = null;
    dropItem ? dropItem.remove() : null;
    let array = new Set();

    if (e.target == drop) {
      if (cart.childNodes.length > 1) {
        cart.childNodes.forEach((i, ind) => {ind !== 0 ? array.add(i.dataset.item) : false});
      }
  
      if (!array.has(dropItem.dataset.item)){
        addToCart(arr[dropItem.dataset.item], arr, total);
      } else {
        let input = document.querySelector('.item__amount[data-item="' + dropItem.dataset.item + '"]');
        const minus = input.parentElement.querySelector('.num-minus');
        if (input) {
          input.value = +input.value + 1;
          total.innerText = `${Number(total.innerText.replace(/.$/, '')) + arr[dropItem.dataset.item].price}$`;
          minus.classList.remove('_not-active');
        }
      } 
    }
  }
}

export {createDropArea, dragItem};