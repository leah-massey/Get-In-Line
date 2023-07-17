function getInLine(arr) {
  const knownGuest = 1;
  const member = 2;

  const orderedArray = arr.sort(function (x, y) {
    return x == knownGuest && y != knownGuest
      ? -1
      : x != knownGuest && y == knownGuest
      ? 1
      : x == member && y != member
      ? -1
      : x != member && y == member
      ? 1
      : 0;
  });

  console.log(orderedArray);

  while (orderedArray[0] === 1) {
    orderedArray.shift();
    orderedArray.reverse();
  }

  console.log(orderedArray);

  let waitTime = orderedArray.indexOf(0) + 1;

  return waitTime;
}

module.exports = getInLine;
