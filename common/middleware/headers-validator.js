'use strict';
const headersEnum = require('../enums/headers-enum');
const headerValidator = require('../services/validate-headers-services');

module.exports = () => (req, res, next) => headerValidator(headersEnum.coffeeShops, req, res, next);
