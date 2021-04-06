/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const newArray = [];
  const sumArray = [];

  for (let i = 0; i <= matrix.length; i++) {
    for (let k = 0; i <= matrix[i].length; k++) {
      newArray.push([]);
      newArray[k].push(matrix[i][k]);
    }
  }
  let sum = 0;
  for (let i = 0; i <= newArray.length; i++) {
    for (let k = 0; i <= newArray[i].length; i++) {
      if (newArray[i][k] === 0) {
        break;
      }
      sum += newArray[i][k];
    }
    sumArray[i] = sum;
    sum = 0;
  }
  return sumArray.reduce((a, b) => a + b);
}

module.exports = getMatrixElementsSum;
