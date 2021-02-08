var tape = require('tape');

var protobuf = require('..');

tape.test('runtime services', async function (test) {
  // FIXME

  try {
    const root = await protobuf.load('tests/data/rpc.proto');

    var MyService = root.lookup('MyService'),
      MyMethod = MyService.get('MyMethod').resolve(),
      MyRequest = MyMethod.resolvedRequestType,
      MyResponse = MyMethod.resolvedResponseType;

    var statusCodes = [200, 400];
    var timesCalled = 0;

    MyService = root.lookup('MyService');

    test.plan(2);

    test.test(test.name + ' - closed server-side', async function (test) {
      async function rpc(method, requestData) {
        if (++timesCalled < 3) {
          test.test(
            test.name + ' - should call the rpc impl with',
            function (test) {
              test.equal(method, MyMethod, 'the reflected method');
              test.ok(requestData.path, '/');
              test.end();
            }
          );
          return new Promise((resolve, reject) => {
            setTimeout(function () {
              var status = statusCodes.shift();
              resolve(
                MyResponse.create({
                  status: status,
                })
              );
            });
          });
        } else {
          test.equal(requestData, null, 'should signal ended client-side');
        }
      }

      var service = MyService.create(rpc, true, false);
      try {
        const response = await service.myMethod(
          MyRequest.create({
            path: '/',
          })
        );
        test.ok(
          response instanceof MyResponse.ctor,
          'should return an instance of MyResponse'
        );
        test.deepEqual(
          response,
          {
            status: 200,
          },
          'should return status 200'
        );

        test.end();
      } catch (err) {
        return test.fail(err.message);
      }
    });

    test.test(test.name + ' - closed client-side', async function (test) {
      async function rpc(method, requestData) {
        if (++timesCalled < 3) {
          test.test(
            test.name + ' - should call the rpc impl with',
            function (test) {
              test.equal(method, MyMethod, 'the reflected method');
              test.ok(requestData.path, '/');
              test.end();
            }
          );

          return new Promise((resolve, reject) => {
            setTimeout(function () {
              var status = statusCodes.shift();
              resolve(
                MyResponse.create({
                  status: status,
                })
              );
            });
          });
        } else {
          test.equal(requestData, null, 'should signal ended client-side');
        }
      }

      var service = MyService.create(rpc, true, false);
      const response = await service.myMethod(
        MyRequest.create({
          path: '/',
        })
      );
      test.ok(
        response instanceof MyResponse.ctor,
        'should return an instance of MyResponse'
      );
      test.deepEqual(
        response,
        {
          status: 400,
        },
        'should return status 400'
      );
      service.end(); // ended client-side

      test.throws(function () {
        service.myMethod(MyRequest.create({ path: '/' }));
      }, 'should return an error if already ended');
    });
  } catch (err) {
    return test.fail(err.message);
  }
});
