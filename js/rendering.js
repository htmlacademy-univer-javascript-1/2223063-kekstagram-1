import { showBigPictures } from './bigPicture.js';

const picture = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const newPhoto = document.createDocumentFragment();

const renderPhoto = (photo) => {
  const item = picturesTemplate.cloneNode(true);

  const img = item.querySelector('.picture__img');
  img.src = photo.url;

  const likes = item.querySelector('.picture__likes');
  likes.textContent = photo.likes;

  const comments = item.querySelector('.picture__comments');
  comments.textContent = photo.comments.length;
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    showBigPictures(photo);
  });
  return item;
};

const renderPhotos = (photos) => {
  photos.forEach((photo) => {
    newPhoto.appendChild(renderPhoto(photo));
  });
  picture.appendChild(newPhoto);
};

export { renderPhotos };

