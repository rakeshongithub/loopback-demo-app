'use strict';
const coffeeShopService = require('./../services/coffe-shops-service');
const logger = require('./../services/logger-service');
const resolveLogger = require('./../utils/resolve-logger');
const errorCodes = require('./../enums/error-codes');

module.exports = (CoffeeShop) => {
  // CoffeeShop Model :: Hide remote methods
  coffeeShopService.hideRemoteMethods(CoffeeShop);

  // CoffeeShop Model :: to get list of all coffeeShops
  CoffeeShop.lists = (req, res, cb) => {
    coffeeShopService.getList(CoffeeShop)
      .then((shops) => {
        res.statusCode = 200;
        logger.info('=> Successfully get the coffee shops list -', resolveLogger({
          response: {statusCode: res.statusCode},
        }));
        return cb(null, shops);
      })
      .catch((err) => {
        logger.error('Failed to get list of coffee shop -', resolveLogger({error: err}));
        res.statusCode = errorCodes.INTERNAL_SERVER_ERROR;
        cb(null, null);
      });
  };

  // CoffeeShop Model :: to get one coffee shop detail
  CoffeeShop.shop = (shopId, req, res, cb) => {
    coffeeShopService.getShop(CoffeeShop, shopId)
      .then((shops) => {
        res.statusCode = 200;
        logger.info('=> Successfully get the coffee shop info by ID -', resolveLogger({
          response: {statusCode: res.statusCode},
        }));
        return cb(null, shops);
      })
      .catch((err) => {
        logger.error('Failed to get coffee shop info by ID -', resolveLogger({error: err}));
        res.statusCode = errorCodes.INTERNAL_SERVER_ERROR;
        cb(null, null);
      });
  };

  // CoffeeShop Model :: to get add new coffee shop to the collection
  CoffeeShop.addShop = (shopDetail, req, res, cb) => {
    coffeeShopService.addShop(CoffeeShop, shopDetail)
      .then((shops) => {
        res.statusCode = 201;
        logger.info('=> Successfully created new coffee shop -', resolveLogger({
          response: {statusCode: res.statusCode},
        }));
        return cb(null, shops);
      })
      .catch((err) => {
        logger.error('Failed to create new coffee shop -', resolveLogger({error: err}));
        res.statusCode = errorCodes.INTERNAL_SERVER_ERROR;
        cb(null, null);
      });
  };

  // CoffeeShop Model :: to get update existing coffee shop detail
  CoffeeShop.updateShop = (shopId, shopDetail, req, res, cb) => {
    coffeeShopService.updateShop(CoffeeShop, shopId, shopDetail)
      .then((shops) => {
        res.statusCode = 204; // can be replace with status code 200
        logger.info('=> Successfully updated shop info -', shopId, resolveLogger({
          response: {statusCode: res.statusCode},
        }));
        return cb(null, shops);
      })
      .catch((err) => {
        logger.error('Failed to update coffee shop info -', shopId, resolveLogger({error: err}));
        res.statusCode = errorCodes.INTERNAL_SERVER_ERROR;
        cb(null, null);
      });
  };
};
