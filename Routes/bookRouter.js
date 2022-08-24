const express = require("express");

const bookRouter = express.Router();

bookRouter.route("/").get().post();
bookRouter.route("/:id").get().patch().delete();

module.exports = bookRouter;
