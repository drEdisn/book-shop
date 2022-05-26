export default function removeBook() {
  const books = document.querySelectorAll('.books__item');

  books.forEach(i => i.remove());
}