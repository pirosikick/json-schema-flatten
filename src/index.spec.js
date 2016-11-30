const test = require('ava');
const flatten = require('../src/index').flatten;

test(t => {
  t.is(flatten(), 'hello');
});
