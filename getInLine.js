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

  const numberKnownGuests = []; // [1,1]

  console.log(orderedArray); //[ 1, 1, 4, 0 ]

  orderedArray.forEach((number) => {
    if (number === 1) {
      numberKnownGuests.push(number);
    }
  });

  console.log(numberKnownGuests);

  //remove the 1s from the array
  for (i = 0; i < numberKnownGuests.length; i++) {
    orderedArray.shift();
  }

  //reverse the orderedArray back and forth by the numberKnownGuests times
  for (i = 0; i < numberKnownGuests.length; i++) {
    orderedArray.reverse();
    console.log(orderedArray);
  }

  let waitTime = orderedArray.indexOf(0) + 1;

  return waitTime;
}

module.exports = getInLine;
