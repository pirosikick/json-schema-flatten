const assert = require('assert');
const resolve = require('resolve');
const VError = require('verror');

function wrappedResolve(id, opts = {}) {
  assert(typeof id === 'string', 'id must be string');
  assert(typeof opts === 'object', 'opts must be object');

  return new Promise((fullfill, reject) => {
    resolve(id, opts, (err, res) => {
      if (err) {
        reject(new VError(err, 'failed to resolve: %s', id));
      } else {
        fullfill(res);
      }
    });
  });
}

module.exports = wrappedResolve;
