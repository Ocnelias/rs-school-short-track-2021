/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newNames = names;
  for (let i = 0; i < newNames.length; i++) {
    for (let k = 0; k < i; k++) {
      if (newNames[i] === newNames[k]) {
        let count = 1;
        for (let n = 0; n < i; n++) {
          if (newNames[n] === `${newNames[i]}(${count})`) {
            count++;
            n = 0;
          }
        }
        newNames[i] = `${newNames[i]}(${count})`;
      }
    }
  }
  return newNames;
}

module.exports = renameFiles;
