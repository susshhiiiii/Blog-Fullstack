import { ERROR_CODES } from "../utils/constants.js";

export const ErrorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = req.statusCode ?? 500;
  switch (statusCode) {
    case ERROR_CODES.AUTHENTICATION_ERROR:
      res.status(ERROR_CODES.AUTHENTICATION_ERROR).json({
        title: "Authentication Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case ERROR_CODES.FORBIDDEN:
      res.status(ERROR_CODES.FORBIDDEN).json({
        title: "Forbidden Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case ERROR_CODES.NOT_FOUND:
      res.status(ERROR_CODES.NOT_FOUND).json({
        title: "Not Found Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case ERROR_CODES.VALIDATION_ERROR:
      res.status(ERROR_CODES.VALIDATION_ERROR).json({
        title: "Validation Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      res.status(ERROR_CODES.SERVER_ERROR).json({
        title: "Internal Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
  }
};
