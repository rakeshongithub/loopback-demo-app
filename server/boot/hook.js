'use strict';
const logger = require('./../../common/services/logger-service');

var addConnectorLoggingHook = (app, connector) => {
  connector.observe('before execute', (ctx, next) => {
    logger.info('=> before execute', JSON.stringify({requestObject: ctx.req}));
    next();
  });

  connector.observe('after execute', (ctx, next) => {
    logger.info('<= after execute', JSON.stringify({
      requestObject: {uri: ctx.res.request.uri.href},
      responseObject: {body: ctx.res.body, statusCode: ctx.res.statusCode}
    }));
    next();
  });

};

var addModelLoggingHook = (model) => {
  model.beforeRemote('**', function (ctx, user, next) {
    logger.info('=> before remote', JSON.stringify({filename: __filename, metaFlag: false, showBody: true}));
    next();
  });

  model.afterRemote('** after remote', function (ctx, output, next) {
    logger.info('<= after remote', JSON.stringify({filename: __filename, metaFlag: false, showBody: true}));
    next();
  });

  model.afterRemoteError('**', function (ctx, next) {
    if (ctx.error) {
      logger.error('==*> error <*==', JSON.stringify({filename: __filename, responseObject: {body: ctx.error}}));
    }
    next();
  });
};

module.exports = (app) => {

  var models = app.models();
  models.forEach((model) => {
    let dataSource = model.getDataSource();
    if (dataSource) {
      let connector = dataSource.connector;
      addConnectorLoggingHook(app, connector);
      addModelLoggingHook(model);
    }
  });
};
