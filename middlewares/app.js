const express = require("express");
const errController = require("../Controllers/errController");

const AppError = require("../utility/appError");

// routes
const bookRouter = require("../Routes/bookRouter");
// routes ended

const app = express();

app.use(express.json());

app.use("/api/v1/books", bookRouter);

app.all("*", (req, res, next) => {
  return next(new AppError("This page has not found", 404));
});

app.use(errController);

module.exports = app;
