'use strict';
const _ = require('lodash');

module.exports.byName = (Model) => {
  const remoteMethods = ['getShopsList', 'getShopById', 'addNewCoffeeShop', 'invoke', 'updateCoffeeShopInfo'];
  _.forEach(remoteMethods, method => Model.disableRemoteMethodByName(method));
};
