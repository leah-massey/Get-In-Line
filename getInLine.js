function getInLine(arr) {
  const member = 2;
  const orderedArray = arr.sort(function (x, y) {
    return x == member ? -1 : y == member ? 1 : 0;
  });

  let waitTime = orderedArray.indexOf(0) + 1;

  return waitTime;
}

module.exports = getInLine;
