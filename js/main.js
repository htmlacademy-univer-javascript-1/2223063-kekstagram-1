function getRandomNumber(first, second){
  if (first > second || first < 0 || second < 0){
    return new Error('Error. Change input values')
    };
  return (Math.round(Math.random() * (second - first) + first));
}

function checkLength(string, length){
  return(string.length <= length);
}

getRandomNumber(1, 4);
checkLength('123', 3);
