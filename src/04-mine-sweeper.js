/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    newArr.push([]);
    for (let k = 0; k < matrix[i].length; k++) {
      newArr[i].push(0);
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      // top direction
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][k] === true) {
          newArr[i][k] += 1;
        }
      }
      // top right direction
      if (matrix[i - 1] !== undefined && matrix[k + 1] !== undefined) {
        if (matrix[i - 1][k + 1] === true) {
          newArr[i][k] += 1;
        }
      }
      // right direction
      if (matrix[k + 1] !== undefined) {
        if (matrix[i][k + 1] === true) {
          newArr[i][k] += 1;
        }
      }
      // bottom right direction
      if (matrix[i + 1] !== undefined && matrix[k + 1] !== undefined) {
        if (matrix[i + 1][k + 1] === true) {
          newArr[i][k] += 1;
        }
      }
      // bottom direction
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][k] === true) {
          newArr[i][k] += 1;
        }
      }
      // bottom left direction
      if (matrix[i + 1] !== undefined && matrix[k - 1] !== undefined) {
        if (matrix[i + 1][k - 1] === true) {
          newArr[i][k] += 1;
        }
      }
      // left direction
      if (matrix[k - 1] !== undefined) {
        if (matrix[i][k - 1] === true) {
          newArr[i][k] += 1;
        }
      }
      // top left direction
      if (matrix[i - 1] !== undefined && matrix[k - 1] !== undefined) {
        if (matrix[i - 1][k - 1] === true) {
          newArr[i][k] += 1;
        }
      }
    }
  }
  return newArr;
}

module.exports = minesweeper;
