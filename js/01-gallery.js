import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = createGalleryItemsMarkup(galleryItems);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
    })
    .join('');
}

// function onGalleryContainerClick(evt) {
//   if (evt.target.nodeName !== 'IMG') {
//     return;
//   }

//   evt.preventDefault();
//   const imageEl = evt.target;

//   createLargeImageLightbox(imageEl);
// }

// function createLargeImageLightbox(image) {
//   const largeImageURL = image.dataset.source;
//   const largeImageAlt = image.alt;

//   const modalImage = basicLightbox.create(
//     `<img src="${largeImageURL}" alt="${largeImageAlt}">`,
//     {
//       onShow() {
//         window.addEventListener('keydown', onEscKeyPress);
//       },
//       onClose() {
//         window.removeEventListener('keydown', onEscKeyPress);
//       },
//     },
//   );

//   modalImage.show();

//   function onEscKeyPress(evt) {
//     const ESC_KEY_CODE = 'Escape';
//     const isEscKey = evt.code === ESC_KEY_CODE;

//     if (isEscKey) {
//       modalImage.close();
//     }
//   }
// }

const modalImage = basicLightbox.create(`<img src="" alt="">`, {
  onShow() {
    window.addEventListener('keydown', onEscKeyPress);
  },
  onClose() {
    window.removeEventListener('keydown', onEscKeyPress);
  },
});

function onGalleryContainerClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  evt.preventDefault();
  const imageEl = evt.target;

  setLargeImageSrc(imageEl);
  modalImage.show();
}

function setLargeImageSrc(image) {
  const largeImageURL = image.dataset.source;
  const largeImageAlt = image.alt;

  modalImage.element().querySelector('img').src = largeImageURL;
  modalImage.element().querySelector('img').alt = largeImageAlt;
}

function onEscKeyPress(evt) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = evt.code === ESC_KEY_CODE;

  if (isEscKey) {
    modalImage.close();
  }
}

console.log(galleryItems);
