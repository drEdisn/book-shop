export default function animate() {
  const animItems = document.querySelectorAll('.anim-item');
  animItems.forEach(i => {
    const animItemHeight = i.offsetHeight;
    const animItemOffset = offset(i).top;
    const animStart = 4;

    let animPoint = window.innerHeight - animItemHeight / animStart;
    if (animItemHeight > window.innerHeight) {
      animPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if ((pageYOffset > animItemOffset - animPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
      i.classList.add('_active');
    } else {
      i.classList.remove('_active');
    }
  })

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop};
  }
}