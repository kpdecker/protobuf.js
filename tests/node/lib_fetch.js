var tape = require("tape");

var fetch = require("../../src/fetch");

tape.test("fetch", function (test) {
  if (typeof Promise !== "undefined")
    test.test(test.name + " - promise", function (test) {
      var promise = fetch("NOTFOUND");
      test.plan(2);
      test.ok(
        promise instanceof Promise,
        "should return a promise if callback has been omitted"
      );
      promise
        .then(function () {
          test.fail("should not resolve");
        })
        .catch(function (err) {
          test.ok(err, "should reject with an error");
        });
    });

  test.test(test.name + " - node fs", function (test) {
    test.test(test.name + " - string", async function (test) {
      test.plan(1);
      try {
        const contents = await fetch(require.resolve("../data/file.txt"));
        test.equal(contents, "file.txt", "should return contents as a string");
      } catch (err) {
        test.notOk(err, "should not return an error");
      }
    });

    test.test(test.name + " - binary", async function (test) {
      test.plan(1);
      try {
        const contents = await fetch(require.resolve("../data/file.txt"), {
          binary: true,
        });
        test.same(
          contents,
          new Buffer("file.txt", "utf8"),
          "should return contents as a Buffer"
        );
      } catch (err) {
        test.notOk(err, "should not return an error");
      }
    });

    test.test(test.name + " - fallback", async function (test) {
      test.plan(1);
      global.XMLHttpRequest = fakeXHR(0);

      try {
        const contents = await fetch("file.txt");
        test.same(contents, "file.txt", "should return contents as a string");
      } catch (err) {
        test.notOk(err, "should not return an error");
      } finally {
        delete global.XMLHttpRequest;
      }
    });

    test.end();
  });

  test.test(test.name + " - XMLHttpRequest", function (test) {
    test.test(test.name + " - 404", function (test) {
      global.XMLHttpRequest = fakeXHR(404);
      fetch("file.txt", { xhr: true }).catch(function (err) {
        delete global.XMLHttpRequest;
        test.ok(err, "should return an error");
        test.end();
      });
    });

    test.test(test.name + " - string", function (test) {
      global.XMLHttpRequest = fakeXHR(0);
      test.plan(1);
      fetch("file.txt", { xhr: true }).then(function (contents) {
        delete global.XMLHttpRequest;
        test.equal(contents, "file.txt", "should return contents as a string");
        test.end();
      });
    });

    test.test(test.name + " - binary", function (test) {
      global.XMLHttpRequest = fakeXHR(200);
      test.plan(1);
      fetch("file.txt", { xhr: true, binary: true }).then(function (contents) {
        delete global.XMLHttpRequest;
        test.same(
          contents,
          new Uint8Array([0x66, 0x69, 0x6c, 0x65, 0x2e, 0x74, 0x78, 0x74]),
          "should return contents as an Uint8Array"
        );
        test.end();
      });
    });
  });

  test.test(test.name + " - XMLHttpRequest (ancient)", function (test) {
    test.test(test.name + " - string", function (test) {
      global.XMLHttpRequest = fakeXHR(0, true);
      test.plan(1);
      fetch("file.txt", { xhr: true }).then(function (contents) {
        delete global.XMLHttpRequest;
        test.equal(contents, "file.txt", "should return contents as a string");
        test.end();
      });
    });

    test.test(test.name + " - binary", function (test) {
      global.XMLHttpRequest = fakeXHR(200, true);
      var U8 = global.Uint8Array;
      delete global.Uint8Array;
      test.plan(1);
      fetch("file.txt", { xhr: true, binary: true }).then(function (contents) {
        delete global.XMLHttpRequest;
        global.Uint8Array = U8;
        test.same(
          contents,
          [0x66, 0x69, 0x6c, 0x65, 0x2e, 0x74, 0x78, 0x74],
          "should return contents as an Array"
        );
        test.end();
      });
    });
  });
});

function fakeXHR(status, ancient) {
  var UNSENT = 0,
    OPENED = 1,
    HEADERS_RECEIVED = 2,
    LOADING = 3,
    DONE = 4;

  function XMLHttpRequest() {
    this.status = 0;
    this.readyState = UNSENT;
  }
  if (!ancient)
    XMLHttpRequest.prototype.overrideMimeType = function (mimeType) {
      this._mimeType = mimeType;
    };
  XMLHttpRequest.prototype.open = function open(method, path) {
    this._method = method;
    this._path = path;
    this.readyState = OPENED;
  };
  XMLHttpRequest.prototype.send = function send() {
    var self = this;
    setTimeout(function () {
      self.onreadystatechange(); // opened
      self.readyState = HEADERS_RECEIVED;
      self.onreadystatechange();
      self.readyState = LOADING;
      self.onreadystatechange();
      self.readyState = DONE;
      self.status = status;
      if (self.responseType === "arraybuffer" && !ancient) {
        var buf = new Buffer(self._path, "utf8");
        var abuf = new ArrayBuffer(buf.length);
        var view = new Uint8Array(abuf);
        for (var i = 0; i < buf.length; ++i) view[i] = buf[i];
        self.response = abuf;
      } else self.responseText = self._path;
      self.onreadystatechange();
    });
  };
  return XMLHttpRequest;
}
