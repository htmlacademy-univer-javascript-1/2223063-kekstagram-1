import { getRandomNumber } from './util.js';

const PHOTO_COUNT = 25;

const NAMES = [
  'Алексей',
  'Виктор',
  'Василиса',
  'Василий',
  'Валентин',
  'Анна',
  'Алена'
];

const MESSAGES = [
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
const PHOTO_DESCRIPTION = [];

const getRandomArrayElement = function (elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
};


function createPhotoDescriptions () {
  for (let i = 0; i < PHOTO_COUNT; i++) {
    PHOTO_DESCRIPTION[i] = {
      id: i + 1,
      url: `photos/${i}.jpg`,
      description: DESCRIPTIONS[i],
      likes: getRandomNumber(15, 200),
      comments: createComments(getRandomNumber(1,17))
    };
  }
  return PHOTO_DESCRIPTION;
}

function createComments() {
  const comments = [];
  for (let i = 0; i < PHOTO_COUNT; i++){
    comments[i] = {
      id: i + 1,
      avatar: `img/avatar${getRandomNumber(1, 6)}.svg`,

      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES)}
  };
      message: getRandomArrayElement(MESSAGE),
      name: getRandomArrayElement(NAMES)
    };
  }

  return comments;
}

createPhotoDescriptions();

export {PHOTO_DESCRIPTION};
export {NAMES, MESSAGES, createPhotoDescriptions, createComments};

export {NAMES, MESSAGE, createPhotoDescriptions, createComments, PHOTO_DESCRIPTION};

