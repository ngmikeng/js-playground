
function addAtBegin(inputArray, newItem) {
	inputArray.unshift(newItem);
}

function addAtPostion(inputArray, newItem, position) {
  inputArray.splice(newItem, 0, position);
}

function removeFirst(inputArray) {
  inputArray.shift();
}

function removeFirstSwallowCopy(inputArray) {
  return inputArray.slice(1);
}

function removeLast(inputArray) {
  inputArray.pop();
}

module.exports = {
  addAtBegin: addAtBegin,
  addAtPostion: addAtPostion,
  removeFirst: removeFirst,
  removeFirstSwallowCopy: removeFirstSwallowCopy,
  removeLast: removeLast
};
