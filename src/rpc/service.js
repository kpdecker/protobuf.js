'use strict';
module.exports = Service;

var util = require('../util/minimal');

// Extends EventEmitter
(Service.prototype = Object.create(
  util.EventEmitter.prototype
)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {
  if (typeof rpcImpl !== 'function')
    throw TypeError('rpcImpl must be a function');

  util.EventEmitter.call(this);

  /**
   * RPC implementation. Becomes `null` once the service is ended.
   * @type {RPCImpl|null}
   */
  this.rpcImpl = rpcImpl;

  /**
   * Whether requests are length-delimited.
   * @type {boolean}
   */
  this.requestDelimited = Boolean(requestDelimited);

  /**
   * Whether responses are length-delimited.
   * @type {boolean}
   */
  this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
  if (this.rpcImpl) {
    if (!endedByRPC)
      // signal end to rpcImpl
      this.rpcImpl(null, null, null);
    this.rpcImpl = null;
    this.emit('end').off();
  }
  return this;
};
