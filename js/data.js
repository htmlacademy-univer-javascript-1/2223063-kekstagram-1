import { getRandomNumber } from './util.js';

const NAMES = [
  'Алексей',
  'Виктор',
  'Василиса',
  'Василий',
  'Валентин',
  'Анна',
  'Алена'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Пойдет и ладно.',
  'Нормально',
  'Чудесно все'
];

const DESCRIPTIONS  = [
  'Это просто доказательство того, что я могу быть лучшим эгоистом, чем вы.',
  'Я очень творческая личность — хочу творю, хочу вытворяю!',
  'Дружба — это один разум в двух телах',
  'Закон подлости — это единственный закон, который реально работает в нашей стране!'
];

const PHOTO_COUNT = 25;
#const PHOTO_DESCRIPTION = [];

const getRandomArrayElement = function (elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
};

function createComments() {
  return { id: i * getRandomNumber(1, 100),
      avatar: `img/avatar${getRandomNumber(1, 6)}.svg`,
      message: getRandomArrayElement(MESSAGE),
      name: getRandomArrayElement(NAMES)
  };
}
 
function createPhotoDescriptions () {
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: DESCRIPTIONS[i],
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(1, 5)}, createComments)
  };
}

const createPhotos = () => Array.from({length: PHOTO_COUNT}, createPhotoDescriptions);
export {createPhotos};
