const assert = require('assert');
const VError = require('verror');

/**
 * wrap JSON.parse with Promise
 */
function parseJSON(str) {
  assert(typeof str === 'string', 'str must be string(s)');

  return new Promise((resolve, reject) => {
    try {
      const parsed = JSON.parse(str);
      resolve(parsed);
    } catch (err) {
      reject(new VError(err, 'failed to parse strings as json'));
    }
  });
}

module.exports = parseJSON;
