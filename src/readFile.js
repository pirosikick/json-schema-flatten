const assert = require('assert');
const fs = require('fs');
const VError = require('verror');

/**
 * wrap fs.readFile with Promise
 *
 * @param {string} file
 * @return {Promise.<string,Error>}
 */
function readFile(file) {
  assert(typeof file === 'string', 'file must be string');

  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(new VError(err, 'failed to read file: %s', file));
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = readFile;
