export default function createHome() {
  const main = document.querySelector('.main');
  const background = document.createElement('div');
  background.classList.add('home');

  background.innerHTML = `
    <div class="home__container">
      <h1 class="title anim-item">Rolling Scope Book Shop</h1>
      <div class="subtitle">
        <p class="subtitle__item anim-item">Low prices</p>
        <p class="subtitle__item anim-item">High quality</p>
        <p class="subtitle__item anim-item">Books for every taste</p>
        <p class="subtitle__item anim-item">Fast shipping</p>  
      </div>
    </div>
  `
  main.append(background);
}