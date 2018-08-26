function addAtBegin(inputArray, newItem) {
	var length = inputArray.length;
	for (var i = length; i >= 0; --i) {
		inputArray[i] = inputArray[i - 1];
	}
	inputArray[0] = newItem;
	console.log(inputArray); // 1,2,3,4,5
}

addAtBegin([1, 2, 3, 4, 5], 10);
