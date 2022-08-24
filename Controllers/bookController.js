const Book = require("../Models/bookModel");
const { getOne, changeStatus, getAll } = require("./handlerController");

const getAllBook = (req, res, next) => {
  getAll(req, res, next, Book);
};

const getBook = (req, res, next) => {
  getOne(req, res, next, Book);
};
const changeStatusBook = (req, res, next) => {
  changeStatus(req, res, next, Book);
};

module.exports = { getBook, changeStatusBook, getAllBook };
