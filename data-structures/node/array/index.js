const arrayBuiltInMethods = require('./array-built-in-methods');

const inputArray = [1, 2, 3, 4, 5];

arrayBuiltInMethods.addAtBegin(inputArray, 10);
arrayBuiltInMethods.addAtPostion(inputArray, 99, 11);
arrayBuiltInMethods.removeFirst(inputArray);
arrayBuiltInMethods.removeLast(inputArray);
const copiedInput = arrayBuiltInMethods.removeFirstSwallowCopy(inputArray);

console.log('Input: ', inputArray);
console.log('Swallow Copy: ', copiedInput);
console.log('Input: ', inputArray);
