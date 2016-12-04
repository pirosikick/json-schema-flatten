const test = require('ava');
const parseJSON = require('./parseJSON');

test('str must be string', t => {
  t.notThrows(() => { parseJSON('{}'); });
  t.throws(() => { parseJSON(1); });
  t.throws(() => { parseJSON({}); });
  t.throws(() => { parseJSON(null); });
});

test('returs Promise', t => {
  t.true(parseJSON('{}') instanceof Promise);
});

test('resolve', t => (
  parseJSON('{"hoge":"hoge"}').then(parsed => {
    t.deepEqual(parsed, { hoge: 'hoge' });
  })
));

test('reject', t => {
  t.plan(1);
  return parseJSON('NOT JSON STRING').catch(err => {
    t.regex(err.message, /^failed to parse strings as json/);
  });
});
