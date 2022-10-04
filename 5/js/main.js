function getRandomNumber(first, second){
  const lower = Math.ceil(Math.min(Math.abs(first), Math.abs(second)));
  const upper = Math.floor(Math.max(Math.abs(first), Math.abs(second)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

function checkStringLength (string, length) {
  return string.length <= length;
};

const getRandomArrayElement = function (elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
};

const names = [
  'Алексей',
  'Виктор',
  'Василиса',
  'Василий',
  'Валентин',
  'Анна'

];

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Пойдет и ладно.',
  'Нормально',
  'Чудесно все'
];

const descriptions = [
  'Это просто доказательство того, что я могу быть лучшим эгоистом, чем вы.',
  'Я очень творческая личность — хочу творю, хочу вытворяю!',
  'Дружба — это один разум в двух телах',
  'Закон подлости — это единственный закон, который реально работает в нашей стране!'
];

const photoCount = 25;
const photoDescriptions = [];

for (let i = 1; i <= photoCount; i++) {
  photoDescriptions.push({
    id: i,
    url: `photos/${i}.jpg`,
    description: descriptions[i],
    likes: getRandomNumber(15, 200),
    comments: [{
      id: i * getRandomNumber(1, 100),
      avatar: `img/avatar${getRandomNumber(1, 6)}.svg`,
      message: getRandomArrayElement(message),
      name: getRandomArrayElement(name)
    }]
  });
}
