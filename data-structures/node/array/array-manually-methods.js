
function addAtBegin(inputArray, newItem) {
  var length = inputArray.length;
  for (var i = length; i >= 0; --i) {
    inputArray[i] = inputArray[i - 1];
  }
  inputArray[0] = newItem;
}

function addAtPostion(inputArray, newItem, position) {
  if (position > inputArray.length - 1) {
    inputArray[inputArray.length] = newItem;
  } else {
    for (var i = inputArray.length; i >= position; i--) {
      inputArray[i] = inputArray[i - 1];
    }
    inputArray[position] = newItem;
  }
}

module.exports = {
  addAtBegin: addAtBegin,
  addAtPostion: addAtPostion
};
