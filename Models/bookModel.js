const mongoose = require("mongoose");
const ISBN = require("isbn-validate");

const bookScheme = new mongoose.Schema({
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  first_publishing_year: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
    enum: [0, 1, 2],
  },
});

const Book = mongoose.model("books", bookScheme);

module.exports = Book;
