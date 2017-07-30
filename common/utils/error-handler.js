const ErrorHandler = {
  createError: (statusCode) => {
    const error = new Error();
    error.statusCode = statusCode;
    return error;
  }
};

module.exports = ErrorHandler;
