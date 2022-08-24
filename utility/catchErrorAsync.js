const appError = require("./appError");

const catchErrAsync = (funksiya) => {
  const catchFunc = (req, res, next, Model) => {
    funksiya(req, res, next, Model).catch((err) =>
      next(new appError(err.message, 404))
    );
  };
  return catchFunc;
};
module.exports = catchErrAsync;
