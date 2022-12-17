function getRandomNumber(first, second){
  first = Math.ceil(first);
  second = Math.ceil(second);

  if (first < second) {
    return Math.floor(Math.random() * (second - first + 1)) + first;
  }
  return 'неверно введённые данные';
}

function checkStringLength (string, length) {
  return string.length <= length;
}

export { getRandomNumber, checkStringLength };
