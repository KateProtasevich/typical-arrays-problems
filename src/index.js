
exports.min = function min (array) {
  if (arguments.length === 0 ) {
    return 0;
  }
  let minNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
  }

  return minNumber;
}

exports.max = function max (array) {
  if (arguments.length === 0 ) {
  return 0;
}
let maxNumber = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > maxNumber) {
    maxNumber = array[i];
  }
}

return maxNumber;
}

exports.avg = function avg (array) {
  if (arguments.length === 0 || array.length ===0) {
    return 0;
  }

  return array.reduce((sum, elem) => sum + elem)/ array.length;
}
