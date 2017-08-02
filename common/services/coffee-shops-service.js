'use strict';
const createError = require('./../utils/error-handler').createError;
const errorCodes = require('./../enums/error-codes');

var coffeeShopService = {
  // Fetch all coffee shop collection
  getList: (CoffeeShop) => {
    return new Promise((resolve, reject) => {
      // coffeeShopsService :: Third party api for coffeeshops collection
      CoffeeShop.app.models.CoffeeShop.getShopsList()
        .then(res => resolve(res))
        .catch(err => reject(createError(errorCodes.INTERNAL_SERVER_ERROR)));
    });
  },

  // Fetch one coffeeshop detail
  getShop: (CoffeeShop, shopId) => {
    return new Promise((resolve, reject) => {
      // coffeeShopsService :: Third party api to get one shop detail by ID
      CoffeeShop.app.models.CoffeeShop.getShopById(shopId)
        .then(res => resolve(res))
        .catch(err => reject(createError(errorCodes.INTERNAL_SERVER_ERROR)));
    });
  },

  // Add new coffee shop to the collection
  addShop: (CoffeeShop, shopDetails) => {
    return new Promise((resolve, reject) => {
      // coffeeShopsService :: Third party api to add new shop to the collection
      CoffeeShop.app.models.CoffeeShop.addNewCoffeeShop(shopDetails)
        .then(res => resolve(res))
        .catch(err => reject(createError(errorCodes.INTERNAL_SERVER_ERROR)));
    });
  },

  // Update existing coffee shop detail
  updateShop: (CoffeeShop, shopId, shopDetails) => {
    return new Promise((resolve, reject) => {
      // coffeeShopsService :: Third party api to update info of existing coffee shop
      CoffeeShop.app.models.CoffeeShop.updateCoffeeShopInfo(shopId, shopDetails)
        .then(res => resolve(res))
        .catch(err => reject(createError(errorCodes.INTERNAL_SERVER_ERROR)));
    });
  },

  // hideRemoteMethods: (Model) => {
  //   const remoteMethods = ['getShopsList', 'getShopById', 'addNewShop', 'invoke', 'updateShopInfo'];
  //   _.forEach(remoteMethods, method => Model.disableRemoteMethodByName(method, true));
  // },
};

// export coffeeShopService for public use
module.exports = coffeeShopService;

