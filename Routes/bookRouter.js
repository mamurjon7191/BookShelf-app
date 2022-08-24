const express = require("express");

const bookController = require("../Controllers/bookController");

const bookRouter = express.Router();

bookRouter.route("/").get(bookController.getAllBook);
bookRouter.route("/:isbn").get(bookController.getBook);

bookRouter.route("/read").post(bookController.changeStatusBook);

module.exports = bookRouter;
