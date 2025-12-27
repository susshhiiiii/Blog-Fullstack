export const NotFoundMiddleware = (req, res, next) => {
  console.log(`Route Not Found ${req.originalUrl}`);
  const error = new Error("Not Found");
  res.status(404);
  next(error);
};
