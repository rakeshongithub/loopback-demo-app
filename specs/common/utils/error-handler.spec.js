'use strict';
/* global expect */

const createError = require('./../../../common/utils/error-handler').createError;

describe('Error Handler', () => {
  it('should be called', () => {
    expect(typeof createError).toBe('function');
  });

  it('should be able to set the status code', () => {
    const statusCode = 400;
    const error = createError(statusCode);
    expect(error.statusCode).toBe(400);
  });
});
