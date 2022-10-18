function getRandomNumber(first, second){
  const lower = Math.ceil(Math.min(Math.abs(first), Math.abs(second)));
  const upper = Math.floor(Math.max(Math.abs(first), Math.abs(second)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

function checkStringLength (string, length) {
  return string.length <= length;
};

export { getRandomNumber, checkStringLength };
