// Return a new array make sure that the next value is larger than or equal the previous value
const inputArray = [1, 2, 5, 2, 3, 2, 4, 6, 1, 7, 9, 9];
const reduceValidArray = (arr) => {
  return arr.reduce((result, currentValue) => {
    if (result.length === 0) {
      result.push(currentValue)
    } else if (currentValue >= result[result.length - 1]) {
      result.push(currentValue);
    }
    return result;
  }, []);
};

const result = reduceValidArray(inputArray);
console.log(result); // [1, 2, 5, 6, 7, 9, 9]
