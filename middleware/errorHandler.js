const { constants } = require("../constant");
const errorHandler = (err, req, res, next) => {
  const statuscode = res.statuscode ? res.statuscode : 500;
  switch (statuscode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "FORBIDDEN Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "UNAUTHORIZED Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "SERVER_ERROR Failed",
        message: err.message,
        stackTrace: err.stack,
      });

    default:
      console.log("No Error, All good..!");
      break;
  }
};

module.exports = errorHandler;
