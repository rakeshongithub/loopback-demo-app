const loopback = require('loopback');
const logger = require('./../services/loggers');
const app = loopback();
var responseTime = require('response-time')

/**
 * Server API Start
 * @author RKU143 <rkumar148@sapient.com>
 */

app.middleware('initial', '/api/*', function logResponse(req, res, next) {
  // http://www.senchalabs.org/connect/responseTime.html
  var start = new Date;
  if (res._responseTime) {
    return next();
  }
  res._responseTime = true;

  // install a listener for when the response is finished
  res.on('finish', function () { // the request was handled, print the log entry
    var duration = new Date - start;
    logger.info(req.method, req.originalUrl, res.statusCode, duration + 'ms');
  });
  next();
});

app.start = () =>
  app.listen(() => {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    logger.info('SYSTEM', `Web server listening at: ${baseUrl}`, false);

    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      logger.info('SYSTEM', `Web server listening explorer at: ${baseUrl}${explorerPath}`, false);
    }

    logger.info('SYSTEM', `Web server listening explorer at: ${baseUrl}/visualize`, false);
  });

module.exports = app;

