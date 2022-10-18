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
export { getRandomNumber, checkStringLength };
