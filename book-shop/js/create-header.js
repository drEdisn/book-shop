import {createCart} from './cart';

export default function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const headContainer = document.createElement('div');
  headContainer.classList.add('header__container');
  
  const logo = document.createElement('div');
  logo.classList.add('header__logo');
  logo.innerHTML = `
  <svg class="svg-logo-animate" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80.75px" height="50.67px" viewBox="0 0 293.75 211.67" enable-background="new 0 0 293.75 211.67" xml:space="preserve">
    <line fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" x1="0" y1="207.35" x2="293.75" y2="207.35"></line>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M152.51,207.6 c-7.51-15.03-17.53-26.29-41.82-26.29c-12.09,0-27.93,7.03-44.42,12.83c-16.63,5.85-50.35,6.69-50.35,6.69l1.47,6.28"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M151.76,207.35 c0,0,7.45-11.78,7.45-31.47c0-19.69-20.77-53.39-12.94-89.8c7.82-36.41,30.74-49.89,38.55-78.07c1.01,0.94,9.73,23.01,7.56,44.36" class="sh-1"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M151.76,207.35 c0,0,9.61-11.24,9.61-30.93s-12.14-40.99-6.47-72.54c5.79-32.28,44.19-48.11,56.36-74.7c1.36,1.84,5.58,25.71,1.62,45.31" class="sh-2"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M151.74,207.33 c0,0,10.02-10.25,12.05-29.83c2.03-19.58-10.52-41.53,2.16-69.58c13.74-30.4,59.05-27.39,73.89-52.59 c0.73,1.72,2.08,20.69-6.47,38.29" class="sh-3"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M151.73,207.35 c0,0,10.59-9.66,13.73-29.1c3.14-19.43-7.33-37.16,6.96-58.19c17.34-25.52,65.6-17.91,85.76-39.1c0.28,2.62-3.23,26.26-16.45,41.8" class="sh-4"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M151.73,207.35 c24.2-22.84,10.18-56.28,29.32-73.27c19.15-16.99,67.96,0.81,89.26-25.35c0.61,1.84-0.99,24.68-12.67,38.56" class="sh-5"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M151.73,207.35 c23.66-19.6,11.79-50.34,32.56-61.94c20.76-11.6,72,13.75,98.16-3.78c-0.19,2.17-5.05,19.75-16.18,30.47" class="sh-6"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M151.73,207.35 c22.58-20.95,10.89-38.78,33.53-49.65c25.78-12.38,65.26,22.34,98.99,10.95c-0.22,1.83-5.02,15.09-13.39,22.61" class="sh-7"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M151.73,207.35 c17.46-13.4,15.21-32.53,36.81-38.27c24.75-6.57,56.5,28.47,94.83,20.59c-0.05,1.35-4.78,11-10.09,15.34" class="sh-8"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M151.73,207.35 c17.46-13.4,15.94-21.15,35.79-25.26c22.11-4.58,52.59,26.16,93.58,22.92" class="sh-9"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M-151.76,207.35 c0,0,7.45-11.78,7.45-31.47c0-19.69-20.77-53.39-12.94-89.8c7.82-36.41,30.74-49.89,38.55-78.07c1.01,0.94,9.73,23.01,7.56,44.36" class="sh-11"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M-151.76,207.35 c0,0,9.61-11.24,9.61-30.93s-12.14-40.99-6.47-72.54c5.79-32.28,44.19-48.11,56.36-74.7c1.36,1.84,5.58,25.71,1.62,45.31" class="sh-12"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M-151.74,207.33 c0,0,10.02-10.25,12.05-29.83c2.03-19.58-10.52-41.53,2.16-69.58c13.74-30.4,59.05-27.39,73.89-52.59 c0.73,1.72,2.08,20.69-6.47,38.29" class="sh-13"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M-151.73,207.35 c0,0,10.59-9.66,13.73-29.1c3.14-19.43-7.33-37.16,6.96-58.19c17.34-25.52,65.6-17.91,85.76-39.1c0.28,2.62-3.23,26.26-16.45,41.8" class="sh-14"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M-151.73,207.35 c24.2-22.84,10.18-56.28,29.32-73.27c19.15-16.99,67.96,0.81,89.26-25.35c0.61,1.84-0.99,24.68-12.67,38.56" class="sh-15"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M-151.73,207.35 c23.66-19.6,11.79-50.34,32.56-61.94c20.76-11.6,72,13.75,98.16-3.78c-0.19,2.17-5.05,19.75-16.18,30.47" class="sh-16"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M-151.73,207.35 c22.58-20.95,10.89-38.78,33.53-49.65c25.78-12.38,65.26,22.34,98.99,10.95c-0.22,1.83-5.02,15.09-13.39,22.61" class="sh-17"></path>
    <path fill="none" stroke="#43464E" stroke-width="4.63" stroke-miterlimit="10" d="M-151.73,207.35 c17.46-13.4,15.21-32.53,36.81-38.27c24.75-6.57,56.5,28.47,94.83,20.59c-0.05,1.35-4.78,11-10.09,15.34" class="sh-18"></path>
    </svg>
`;

  const menu = document.createElement('div');
  menu.classList.add('header__menu');
  menu.innerHTML = `
    <div class="phone">
      <a href="tel:88005553535" class="phone__link">+8(800)555-35-35</a>
      <div class="phone__image"></div>
    </div>
    <div class="cost-wrap">
      <div class="cost"></div>
    </div>
    <div class="cart-wrap">
      <div class="cart"></div>
      <div class="_count-items">0</div>
    </div>
  `;
  
  window.onscroll = () => {
    let sticky = header.offsetTop + 5;

    if (window.pageYOffset >= sticky) {
      headContainer.classList.add('header__fixed');
    } else {
      headContainer.classList.remove('header__fixed');
    }
  };
  
  setTimeout(() => {logo.classList.add('header__logo-open')});
  menu.append(createCart());
  headContainer.append(logo, menu);
  header.append(headContainer);

  return header;
}