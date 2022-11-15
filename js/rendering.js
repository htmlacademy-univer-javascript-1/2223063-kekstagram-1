import {PHOTO_DESCRIPTION} from './data.js';

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
  return item;
};

const renderPhotos = () => {
  PHOTO_DESCRIPTION.forEach((photo) => {
    newPhoto.appendChild(renderPhoto(photo));
  });
  picture.appendChild(newPhoto);
};

renderPhotos();
