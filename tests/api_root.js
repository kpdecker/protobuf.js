var tape = require('tape');

var protobuf = require('..');

var Root = protobuf.Root;

var def = {
  nested: {},
  options: { javaPackage: 'com.something' },
};

tape.test('reflected roots', function (test) {
  test.test(test.name + ' - construct', function (test) {
    var root = Root.fromJSON(def);
    test.ok(root instanceof Root, 'should construct from JSON');
    var root2 = Root.fromJSON(def, root);
    test.equal(
      root2,
      root,
      'should construct from JSON and reuse specified Root'
    );
    test.end();
  });

  test.test(test.name + ' - promise', function (test) {
    var root = new Root();
    var promise = root.load('tests/data/common.proto');
    promise
      .then(function () {
        test.pass('should resolve');
        test.end();
      })
      .catch(function () {
        test.fail('should not reject');
      });
  });

  test.test(test.name + ' - json', async function (test) {
    var root = new Root();
    test.plan(2);
    try {
      await root.load('tests/data/common.json');
      test.ok(root.lookupType('google.protobuf.Any'), 'should load JSON files');
      await root.load('tests/data/common.json');
      test.same(
        root.files,
        ['common.json'],
        'should not attempt to load the same file twice'
      );
      test.end();
    } catch (err) {
      test.fail(
        'should not return an error when loading JSON files: ' + err.message
      );
    }
  });

  test.test(test.name + ' - weak', async function (test) {
    var root = new Root();
    test.plan(0);
    try {
      await root.load(['tests/data/weak.proto']);
      test.end();
    } catch (err) {
      test.notOk(err, 'should ignore missing weak imports');
    }
  });

  test.test(test.name + ' - missing', async function (test) {
    var root = new Root();
    test.plan(1);
    try {
      await root.load('tests/data/NOTFOUND');
    } catch (err) {
      test.ok(err, 'should return an error when trying to load missing protos');
      test.end();
    }
  });

  test.test(test.name + ' - skipped', async function (test) {
    var root = new Root();
    root.resolvePath = function () {
      return null;
    };
    test.plan(0);
    try {
      await root.load('tests/data/NOTFOUND2');
      test.end();
    } catch (err) {
      test.notOk(
        err,
        'should skip files without error when resolvePath returns null'
      );
    }
  });

  test.test(test.name + ' - skipped import', async function (test) {
    var root = new Root();
    root.resolvePath = function (origin, target) {
      if (/weak\.proto$/.test(target))
        return protobuf.util.path.resolve(origin, target);
      return null;
    };
    test.plan(0);
    try {
      await root.load('tests/data/weak.proto');
      test.end();
    } catch (err) {
      test.notOk(
        err,
        'should skip files without error when resolvePath returns null'
      );
    }
  });
});
