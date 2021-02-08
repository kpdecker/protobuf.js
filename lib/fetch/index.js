"use strict";
module.exports = fetch;

var inquire = require("@protobufjs/inquire");

var fs = inquire("fs");

/**
 * Options as used by {@link util.fetch}.
 * @interface IFetchOptions
 * @property {boolean} [binary=false] Whether expecting a binary response
 * @property {boolean} [xhr=false] If `true`, forces the use of XMLHttpRequest
 */

/**
 * Fetches the contents of a file.
 * @memberof util
 * @param {string} filename File path or url
 * @param {IFetchOptions} options Fetch options
 * @returns {Promise<string|Uint8Array>} Promise
 */
function fetch(filename, options) {
  if (!options) options = {};

  return new Promise(function (resolve, reject) {
    function callback(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    }
    // if a node-like filesystem is present, try it first but fall back to XHR if nothing is found.
    if (!options.xhr && fs && fs.readFile)
      return fs.readFile(
        filename,
        function fetchReadFileCallback(err, contents) {
          return err && typeof XMLHttpRequest !== "undefined"
            ? fetch.xhr(filename, options, callback)
            : err
            ? callback(err)
            : callback(
                null,
                options.binary ? contents : contents.toString("utf8")
              );
        }
      );

    // use the XHR version otherwise.
    return fetch.xhr(filename, options, callback);
  });
}

/**/
fetch.xhr = function fetch_xhr(filename, options, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange /* works everywhere */ = function fetchOnReadyStateChange() {
    if (xhr.readyState !== 4) return undefined;

    // local cors security errors return status 0 / empty string, too. afaik this cannot be
    // reliably distinguished from an actually empty file for security reasons. feel free
    // to send a pull request if you are aware of a solution.
    if (xhr.status !== 0 && xhr.status !== 200)
      return callback(Error("status " + xhr.status));

    // if binary data is expected, make sure that some sort of array is returned, even if
    // ArrayBuffers are not supported. the binary string fallback, however, is unsafe.
    if (options.binary) {
      var buffer = xhr.response;
      if (!buffer) {
        buffer = [];
        for (var i = 0; i < xhr.responseText.length; ++i)
          buffer.push(xhr.responseText.charCodeAt(i) & 255);
      }
      return callback(
        null,
        typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer
      );
    }
    return callback(null, xhr.responseText);
  };

  if (options.binary) {
    // ref: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data#Receiving_binary_data_in_older_browsers
    if ("overrideMimeType" in xhr)
      xhr.overrideMimeType("text/plain; charset=x-user-defined");
    xhr.responseType = "arraybuffer";
  }

  xhr.open("GET", filename);
  xhr.send();
};
