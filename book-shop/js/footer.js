export default function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = `
    <div class="footer__container">
      <a href="https://rs.school/" class="rss anim-item"></a>
      <a href="https://github.com/drEdisn" class="github anim-item"></a>
      <div class="contacts">
        <div class="phone footer-phone anim-item">
          <a href="tel:88005553535" class="phone__link">+8(800)555-35-35</a>
          <div class="phone__image"></div>
        </div>
        <div class="mail anim-item">
          <a href="mailto:denizs00@mail.ru" class="mail__link">denizs00@mail.ru</a>
          <div class="mail__image"></div>
        </div>
      </div>
    </div>
  `;

  return footer;
}