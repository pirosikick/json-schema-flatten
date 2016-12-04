const test = require('ava');
const readFile = require('./readFile');

const fixturePath = './fixture/schema.json';

test('file must be string', t => {
  t.notThrows(() => { readFile(fixturePath); });
  t.throws(() => { readFile(undefined); });
  t.throws(() => { readFile(1); });
  t.throws(() => { readFile({}); });
});

test('returns Promise', t => {
  t.true(readFile(fixturePath) instanceof Promise);
});

test('resolve', t => (
  readFile(fixturePath).then(data => {
    t.true(typeof data === 'string');
  })
));

test('reject', t => {
  t.plan(2);
  return readFile('./not-exists-file').catch(err => {
    t.true(err instanceof Error);
    t.regex(err.message, /^failed to read file:/);
  });
});
