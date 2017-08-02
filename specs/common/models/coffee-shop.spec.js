'use strict';
/* global expect */

const CoffeeShop = require('../../../common/models/coffee-shop');
const coffeeShopService = require('../../../common/services/coffee-shops-service');
let mockCoffeeShopLists;

describe('Coffee Shop Model', () => {
  let mockCoffeeShop = {};
  let req = {};
  let res = {};

  const coffeeShopsResponseBody = [{
    'id': '368a3d67ea5f42118f6095772d599642',
    'name': 'Kiehn Inc',
    'city': 'South Lucileborough',
    'currencyCode': 'ISK',
    'phone': '149-603-8219',
    'info': 'Quia quia dolores...',
  },
  {
    'id': 'df9899e48d1d4d4591f1aded54a51bc5',
    'name': 'Roob - Lehner',
    'city': 'North Carmelborough',
    'currencyCode': 'HRK',
    'phone': '525-215-3998',
    'info': 'Officia vero reiciendis vitae...',
  }];

  const coffeeShopResponseById = {
    'name': 'Kiehn Inc',
    'id': '368a3d67ea5f42118f6095772d599642',
    'city': 'South Lucileborough',
    'currencyCode': 'ISK',
    'phone': '149-603-8219',
    'info': 'Quia quia dolores...',
  };

  const updatedCoffeeShopResponseById = {
    'name': 'Updated Coffee Shop',
    'id': '368a3d67ea5f42118f6095772d599642',
    'city': 'South Lucileborough',
    'currencyCode': 'ISK',
    'phone': '149-603-8219',
    'info': 'Quia quia dolores...',
  };

  const shopDetails = {
    'name': 'New Coffee Shop',
    'city': 'South Lucileborough',
    'currencyCode': 'ISK',
    'phone': '149-603-8219',
    'info': 'Quia quia dolores...',
  };
  const shopId = coffeeShopResponseById.id;

  it('should define methods "getAllCoffeeShopsList, getCoffeeShopById, addCoffeeShop, updateCoffeeShop"', (done) => {
    mockCoffeeShop.disableRemoteMethodByName = () => true;
    CoffeeShop(mockCoffeeShop);
    expect(typeof mockCoffeeShop.getAllCoffeeShopsList).toBe('function');
    expect(typeof mockCoffeeShop.getCoffeeShopById).toBe('function');
    expect(typeof mockCoffeeShop.addCoffeeShop).toBe('function');
    expect(typeof mockCoffeeShop.updateCoffeeShop).toBe('function');

    done();
  });

  describe('getAllCoffeeShopsList :: Get all coffee shop list', () => {
    it('should provide 500 failed to fetch coffee shop collection', (done) => {
      mockCoffeeShopLists = {
        disableRemoteMethodByName: () => true,
        app: {
          models: {
            CoffeeShop: {
              getShopsList: () => new Promise(reject => reject(coffeeShopsResponseBody)),
            },
          },
        },
      };

      CoffeeShop(mockCoffeeShopLists, coffeeShopService);
      const callback = (err, data) => {
        expect(res.statusCode).toEqual(500);
        expect(data).toEqual(null);
        done();
      };
      expect(typeof mockCoffeeShopLists.disableRemoteMethodByName).toBe('function');
      mockCoffeeShop.getAllCoffeeShopsList(req, res, callback);
    });

    it('should give response 200 successfully fetch coffee shop collection', (done) => {
      mockCoffeeShop = {
        disableRemoteMethodByName: () => true,
        app: {
          models: {
            CoffeeShop: {
              getShopsList: () => new Promise(resolve => resolve(coffeeShopsResponseBody)),
            },
          },
        },
      };
      CoffeeShop(mockCoffeeShop, coffeeShopService);
      const callback = (err, data) => {
        expect(res.statusCode).toEqual(200);
        expect(data).toEqual(coffeeShopsResponseBody);
        done();
      };
      expect(typeof mockCoffeeShop.disableRemoteMethodByName).toBe('function');
      mockCoffeeShop.getAllCoffeeShopsList(req, res, callback);
    });
  });

  describe('getShopById :: Get coffee shop by Id', () => {
    it('should give response 200 successfully fetch coffee shop paylod', (done) => {
      const getShopById = (shopId) => new Promise(resolve => resolve(coffeeShopResponseById));
      mockCoffeeShop = {
        disableRemoteMethodByName: () => true,
        app: {
          models: {
            CoffeeShop: {
              getShopById: getShopById,
            },
          },
        },
      };
      CoffeeShop(mockCoffeeShop, coffeeShopService);
      const callback = (err, data) => {
        expect(res.statusCode).toEqual(200);
        expect(data).toEqual(coffeeShopResponseById);
        done();
      };
      expect(typeof mockCoffeeShop.disableRemoteMethodByName).toBe('function');
      mockCoffeeShop.getCoffeeShopById(shopId, req, res, callback);
    });

    it('should provide 500 when failed to fetch coffee shop paylod', (done) => {
      mockCoffeeShop.app.models.CoffeeShop = {};
      const getShopById = (shopId) => new Promise(reject => reject(coffeeShopResponseById));
      mockCoffeeShopLists = {
        disableRemoteMethodByName: () => true,
        app: {
          models: {
            CoffeeShop: {
              getShopById: getShopById,
            },
          },
        },
      };
      CoffeeShop(mockCoffeeShopLists, coffeeShopService);
      const callback = (err, data) => {
        expect(res.statusCode).toEqual(500);
        expect(data).toEqual(null);
        done();
      };
      expect(typeof mockCoffeeShopLists.disableRemoteMethodByName).toBe('function');
      mockCoffeeShop.getCoffeeShopById(shopId, req, res, callback);
    });
  });

  describe('addCoffeeShop :: Add new coffee shop to the collection', () => {
    it('should provide 500 when failed to create new coffee shop paylod', (done) => {
      const addNewCoffeeShop = (shopDetails) => new Promise(reject => reject(coffeeShopResponseById));
      mockCoffeeShopLists = {
        disableRemoteMethodByName: () => true,
        app: {
          models: {
            CoffeeShop: {
              addNewCoffeeShop: addNewCoffeeShop,
            },
          },
        },
      };

      CoffeeShop(mockCoffeeShopLists, coffeeShopService);
      const callback = (err, data) => {
        expect(res.statusCode).toEqual(500);
        expect(data).toEqual(null);
        done();
      };
      expect(typeof mockCoffeeShop.disableRemoteMethodByName).toBe('function');
      mockCoffeeShop.addCoffeeShop(shopDetails, req, res, callback);
    });

    it('should give success response 201 successfully created new coffee shop paylod', (done) => {
      const addNewCoffeeShop = (shopDetails) => new Promise(resolve => resolve(coffeeShopResponseById));
      mockCoffeeShop = {
        disableRemoteMethodByName: () => true,
        app: {
          models: {
            CoffeeShop: {
              addNewCoffeeShop: addNewCoffeeShop,
            },
          },
        },
      };
      CoffeeShop(mockCoffeeShop, coffeeShopService);
      const callback = (err, data) => {
        expect(res.statusCode).toEqual(201);
        expect(data).not.toEqual(null);
        done();
      };
      expect(typeof mockCoffeeShop.disableRemoteMethodByName).toBe('function');
      mockCoffeeShop.addCoffeeShop(shopDetails, req, res, callback);
    });
  });

  describe('updateCoffeeShop :: Update existing coffee shop info', () => {
    it('should provide 500 when failed to updated coffee shop info', (done) => {
      const newShopId = '368a3d67ea5f42118f6095772d5996';
      const updateCoffeeShopInfo = (newShopId, coffeeShopResponseById) => new Promise(reject => {
        return reject(updatedCoffeeShopResponseById);
      });
      mockCoffeeShopLists = {
        disableRemoteMethodByName: () => true,
        app: {
          models: {
            CoffeeShop: {
              updateCoffeeShopInfo: updateCoffeeShopInfo,
            },
          },
        },
      };
      CoffeeShop(mockCoffeeShopLists, coffeeShopService);
      const callback = (err, data) => {
        expect(res.statusCode).toEqual(500);
        expect(data).toEqual(null);
        done();
      };
      expect(typeof mockCoffeeShopLists.disableRemoteMethodByName).toBe('function');
      mockCoffeeShop.updateCoffeeShop(newShopId, shopDetails, req, res, callback);
    });

    it('should provide 200 successfully updated coffee shop info', (done) => {
      const updateCoffeeShopInfo = (shopId, coffeeShopResponseById) => new Promise(resolve => {
        return resolve(updatedCoffeeShopResponseById);
      });
      mockCoffeeShop = {
        disableRemoteMethodByName: () => true,
        app: {
          models: {
            CoffeeShop: {
              updateCoffeeShopInfo: updateCoffeeShopInfo,
            },
          },
        },
      };

      CoffeeShop(mockCoffeeShop, coffeeShopService);
      const callback = (err, data) => {
        expect(res.statusCode).toEqual(200);
        expect(data).toEqual(updatedCoffeeShopResponseById);
        done();
      };
      expect(typeof mockCoffeeShop.disableRemoteMethodByName).toBe('function');
      mockCoffeeShop.updateCoffeeShop(shopId, shopDetails, req, res, callback);
    });
  });
});
