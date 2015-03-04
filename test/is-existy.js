var test = require('tape');
var isExisty = require('../is-existy');

test('isExisty', function (t) {
  t.plan(9);

  t.false(isExisty(null));
  t.false(isExisty(undefined));
  t.true(isExisty(0));
  t.true(isExisty(1));
  t.true(isExisty(false));
  t.true(isExisty(true));
  t.true(isExisty(''));
  t.true(isExisty({}));
  t.true(isExisty([]));
});
