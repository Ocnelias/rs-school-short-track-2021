/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const res = [];
  const res2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      res.push(2 + arr[i]);
      i++;
    } else {
      res.push(arr[i]);
    }
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i + 1] !== undefined && res[i].split('').pop() === res[i + 1].split('').pop()) {
      let count1 = 0;
      let count2 = 0;
      if (Number.isNaN(Number(res[i].split('')[0]))) {
        count1 = 1;
      } else {
        count1 = parseInt(res[i].split('')[0], 10);
      }
      if (Number.isNaN(Number(res[i + 1].split('')[0]))) {
        count2 = 1;
      } else {
        count2 = parseInt(res[i + 1].split('')[0], 10);
      }
      res2.push(count1 + count2 + res[i + 1].split('').pop());
      i++;
    } else {
      res2.push(res[i]);
    }
  }
  return res2.join('');
}

module.exports = encodeLine;
