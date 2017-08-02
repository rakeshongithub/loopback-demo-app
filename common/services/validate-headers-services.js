'use strict';
const logger = require('./../services/logger-service');
const errorCodes = require('../enums/error-codes');
const resolveLogger = require('./../utils/resolve-logger');

const validate = header => (!!header);

const headerValidator = (requiredHeaders, req, res, next) => {
  logger.info('Middleware is triggered on for validating required headers', resolveLogger({fileName: __filename}));
  const inValidHeaders = [];
  const finalHeaders = requiredHeaders || [];
  Object.keys(finalHeaders).forEach((header) => {
    if (!validate(req.header(finalHeaders[header]))) {
      inValidHeaders.push(finalHeaders[header]);
    }
  });
  if (inValidHeaders.length) {
    logger.info('The request does not have following headers.', resolveLogger({
      fileName: __filename,
      inValidHeaders: inValidHeaders,
    }));
    res.status(errorCodes.BAD_REQUEST).send(`Request does not have following headers: ${inValidHeaders.toString()}`);
  } else {
    logger.info('The request have all the required headers.', resolveLogger({fileName: __filename}));
    next();
  }
};

module.exports = headerValidator;
