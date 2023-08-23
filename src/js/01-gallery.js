// Add imports above this line
import { galleryItems } from './gallery-items';
// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');

const items = galleryItems.map(galleryItem => {
  const imageItem = `<div class="gallery__item">\n<a class="gallery__link" href="${galleryItem.original}">\n<img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />\n</a>\n<\div>`;
  gallery.insertAdjacentHTML('beforeend', imageItem);
});

let lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
});
