export default function createBookSection() {
  const main = document.querySelector('.main');
  const section = document.createElement('section');
  section.classList.add('books');
  section.innerHTML = `
    <h2 class="title books__title anim-item">Our books</h2>
    <div class="books__container"></div>
    <div class="books__arrow">
      <div class="arrow-dbl-left arrow _not-active">
      <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 45 45"><path d="M35.3 35.95 23.3 23.95 35.3 11.95 37.4 14.05 27.5 23.95 37.4 33.85ZM22.65 35.95 10.65 23.95 22.65 11.95 24.75 14.05 14.85 23.95 24.75 33.85Z"/></svg>
      </div>
      <div class="arrow-left arrow _not-active">
      <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 45 45"><path d="M28.05 36 16 23.95 28.05 11.9 30.2 14.05 20.3 23.95 30.2 33.85Z"/></svg>
      </div>
      <div class="page-num">1</div>
      <div class="arrow-right arrow">
        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 45 45"><path d="M18.75 36 16.6 33.85 26.5 23.95 16.6 14.05 18.75 11.9 30.8 23.95Z"/></svg>
      </div>
      <div class="arrow-dbl-right arrow">
      <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 45 45"><path d="M12.75 35.95 10.65 33.85 20.55 23.95 10.65 14.05 12.75 11.95 24.75 23.95ZM25.4 35.95 23.3 33.85 33.2 23.95 23.3 14.05 25.4 11.95 37.4 23.95Z"/></svg>
      </div>
    </div>
  `;

  main.append(section);
}