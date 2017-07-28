'use strict';

const ExceptionHandler = require('exception-handler');
/**
 * Overwridden the config.json in production environment
 * @override
 * @type {{remoting: {errorHandler: {handler: *}}}}
 * @author SKU146 <skumar146@sapient.com>
 */

const params = {
  metaFlag: false,
  filename: __filename,
};

module.exports = {
  host: process.env.VCAP_APP_HOST,
  port: process.env.VCAP_APP_PORT,
  remoting: {
    errorHandler: {
      handler: ExceptionHandler.handleExceptionUtil(params),
    },
  },
};
