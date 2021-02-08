var tape = require("tape");

var protobuf = require("..");

var proto = "syntax = \"proto3\";\
package myservice;\
message DoSomethingRequest {\
}\
message DoSomethingResponse {\
}\
service MyService {\
  rpc DoSomething(DoSomethingRequest) returns (DoSomethingResponse) {\
    option (google.api.http) = {\
      get: \"/v1/dosomething\"\
    };\
  };\
}";

tape.test("reflected services call", function(test) {
    var root = protobuf.parse(proto).root;

    var myservice = root.lookup("myservice").resolveAll(),
        MyService = myservice.MyService,
        DoSomethingRequest = myservice.DoSomethingRequest,
        DoSomethingResponse = myservice.DoSomethingResponse,
        DoSomething = MyService.get("DoSomething");

    test.throws(function() {
        MyService.create();
    }, TypeError, "should throw if rpcImpl is not specified");

    async function rpcImpl(method, requestData) {
        if (requestData) {
            test.equal(method, DoSomething, "rpcImpl should reference the correct method");
            return new Promise((resolve, reject) => {
                setTimeout(function () {
                    resolve(DoSomethingResponse.create());
                });
            });
        } else {
            test.equal(method, null, "rpcImpl stream not implemented");
        }
    }

    var service = MyService.create(rpcImpl);

    test.test(test.name + " - should propagate errors from rpcImpl", async function(test) {
        var err = Error();
        var service2 = MyService.create(function() { return Promise.reject(err); });
        var count = 0;
        service2.on("error", function(err2) {
            test.equal(err2, err, "should emit the exact error");
            if (++count === 2)
                test.end();
        });
        try {
            await service2.doSomething({});
        } catch (err2) {
            test.equal(err2, err, "should return the exact error");
            if (++count === 2)
                test.end();
        }
    });

    test.test(test.name + " - should catch errors within rpcImpl", async function(test) {
        var err = Error();
        var service2 = MyService.create(function() { throw err; });
        var count = 0;
        service2.on("error", function(err2) {
            test.equal(err2, err, "should emit the exact error");
            if (++count === 2)
                test.end();
        });
        try {
            await service2.doSomething({});
        } catch (err2) {
            test.equal(err2, err, "should return the exact error");
            if (++count === 2)
                test.end();
        }
    });

    var dataEmitted = false;
    service.on("data", function(responseData) {
        dataEmitted = true;
        test.ok(responseData, "should emit the data event");
    });
    var endCalled = false;
    service.on("end", function() {
        test.notOk(endCalled, "should not emit the end event twice");
        endCalled = true;
        test.pass("should call the end event");
        service.end();
        test.end();
    });
    service.doSomething(DoSomethingRequest.create(), function(err, res) {
        test.notOk(err, "should not raise an error");
        test.ok(res instanceof DoSomethingResponse.ctor, "should return a properly typed response");
        test.ok(dataEmitted, "should have emitted the data event");
        service.end();
    });
    
});