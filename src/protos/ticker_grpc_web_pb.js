/**
 * @fileoverview gRPC-Web generated client stub for ticker
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.ticker = require('./ticker_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ticker.TickerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ticker.TickerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ticker.Integer,
 *   !proto.ticker.TickData>}
 */
const methodDescriptor_Ticker_EmaTick = new grpc.web.MethodDescriptor(
  '/ticker.Ticker/EmaTick',
  grpc.web.MethodType.UNARY,
  proto.ticker.Integer,
  proto.ticker.TickData,
  /**
   * @param {!proto.ticker.Integer} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ticker.TickData.deserializeBinary
);


/**
 * @param {!proto.ticker.Integer} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ticker.TickData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ticker.TickData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ticker.TickerClient.prototype.emaTick =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ticker.Ticker/EmaTick',
      request,
      metadata || {},
      methodDescriptor_Ticker_EmaTick,
      callback);
};


/**
 * @param {!proto.ticker.Integer} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ticker.TickData>}
 *     Promise that resolves to the response
 */
proto.ticker.TickerPromiseClient.prototype.emaTick =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ticker.Ticker/EmaTick',
      request,
      metadata || {},
      methodDescriptor_Ticker_EmaTick);
};


module.exports = proto.ticker;

