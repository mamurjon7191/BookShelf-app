const catchError = require("../utility/catchingError");
const axios = require("axios");
const AppError = require("../utility/appError");

const response = (res, statusCode, data) => {
  if (Array.isArray(data)) {
    res.status(statusCode).json({
      status: "success",
      results: data.length,
      data: data,
    });
  } else {
    res.status(statusCode).json({
      status: "success",
      data: data,
    });
  }
};

const getOne = catchError(async (req, res, next, Model) => {
  const isbn = req.params.isbn;

  const dataFromApi = await axios.get(
    `https://openlibrary.org/books/${isbn}.json`
  );

  console.log(dataFromApi.data);

  if (!dataFromApi) {
    return next(new AppError("Data has not found"));
  }

  const authors = await axios.get(
    `https://openlibrary.org${dataFromApi.data.authors[0].key}.json`
  );

  // console.log(authors);

  const data = await Model.create({
    isbn: isbn,
    title: dataFromApi.data.title,
    author: authors.data.name || dataFromApi.data.publishers[0],
    first_publishing_year: dataFromApi.data.publish_date,
    pages: dataFromApi.data.number_of_pages,
  });

  response(res, 200, data);
});

const changeStatus = catchError(async (req, res, next, Model) => {
  const data = await Model.findOne({
    isbn: req.body.isbn,
  });
  data.status = req.body.status;
  data.save({ validateBeforeSave: false });

  response(res, 200, data);
});

const getAll = catchError(async (req, res, next, Model) => {
  const data = await Model.find();
  response(res, 200, data);
});

module.exports = { getOne, changeStatus, getAll };
