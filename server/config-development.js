'use strict';

const ExceptionHandler = require('exception-handler');
const configs = require('./config.json');
/**
 * Overwridden the config.json in development environment
 * @override
 * @type {{remoting: {errorHandler: {handler: *}}}}
 * @author SKU146 <rkumar148@sapient.com>
 */

const params = {
  metaFlag: false,
  filename: __filename,
};

module.exports = {
  host: process.env.VCAP_APP_HOST || configs.host,
  port: process.env.VCAP_APP_PORT || configs.port,
  remoting: {
    errorHandler: {
      handler: ExceptionHandler.handleExceptionUtil(params),
    },
  },
};
