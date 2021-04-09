/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const reversed = [];
  const duplicates = [];
  const count = {};
  for (let i = 0; i < domains.length; i++) {
    reversed.push(domains[i].split('.').reverse());
  }
  for (let i = 0; i < reversed.length; i++) {
    duplicates.push(`.${reversed[i][0]}`);
    duplicates.push(`.${reversed[i][0]}.${reversed[i][1]}`);
    if (reversed[i][2] !== undefined) {
      duplicates.push(`.${reversed[i][0]}.${reversed[i][1]}.${reversed[i][2]}`);
    }
  }
  for (let i = 0; i < duplicates.length; i++) {
    count[duplicates[i]] = 0;
  }
  for (let i = 0; i < duplicates.length; i++) {
    if (duplicates[i] in count) {
      count[duplicates[i]] += 1;
    }
  }
  return count;
}

module.exports = getDNSStats;
