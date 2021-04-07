/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1New = s1.split('');
  const s2New = s2.split('');
  const commonLettersArr1 = {};
  const commonLettersArr2 = {};
  const res = [];
  for (let i = 0; i < s1New.length; i++) {
    commonLettersArr2[s1New[i]] = 0;
    for (let k = 0; k < s2New.length; k++) {
      if (s1New[i] === s2New[k]) {
        commonLettersArr2[s1New[i]] += 1;
      }
    }
  }

  for (let i = 0; i < s2New.length; i++) {
    commonLettersArr1[s2New[i]] = 0;
    for (let k = 0; k < s1New.length; k++) {
      if (s2New[i] === s1New[k]) {
        commonLettersArr1[s2New[i]] += 1;
      }
    }
  }
  Object.keys(commonLettersArr1).forEach((i) => {
    if (i in commonLettersArr2) {
      if (commonLettersArr1[i] < commonLettersArr2[i]) {
        res[i] = commonLettersArr1[i];
      } else {
        res[i] = commonLettersArr2[i];
      }
    }
  });
  return (Object.values(res).reduce((a, b) => a + b, 0));
}

module.exports = getCommonCharacterCount;
