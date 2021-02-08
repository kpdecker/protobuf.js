var tape = require('tape');

var protobuf = require('..');

tape.test('uncommon statements', async function (test) {
  test.plan(3);
  try {
    await protobuf.load('tests/data/uncommon.proto');
    const root = await new protobuf.Root().load('tests/data/uncommon.proto', {
      keepCase: true,
    });
    test.pass('should parse without errors');
    test.doesNotThrow(function () {
      root.resolveAll();
    }, 'should resolve without errors');
    test.doesNotThrow(function () {
      traverseTypes(root, function (type) {
        type.setup();
      });
    }, 'should setup all types without errors');
    test.end();
  } catch (err) {
    test.fail((err && err.message) || 'should parse without errors');
  }
});

function traverseTypes(current, fn) {
  if (current instanceof protobuf.Type)
    // and/or protobuf.Enum, protobuf.Service etc.
    fn(current);
  if (current.nestedArray)
    current.nestedArray.forEach(function (nested) {
      traverseTypes(nested, fn);
    });
}
