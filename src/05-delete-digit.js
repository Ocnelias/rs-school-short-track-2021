/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newArr = [];
  let arr = n.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1);
    newArr.push(Number(arr.join('')));
    arr = n.toString().split('');
  }
  return (Math.max(...newArr));
}

module.exports = deleteDigit;
