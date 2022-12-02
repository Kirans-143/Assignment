let express = require("express");
let booksRouter = express.Router();
let bookController = require("../controller/book.controller");
let bookValidator = require("./../middlewares/book.validator");

booksRouter.get(
  "/",
  [bookValidator.validateCreate],
  bookController.getAllBooks
);
booksRouter.get("/:categoryId", bookController.getBookById);
booksRouter.post("/:categoryId", bookController.addNewBook);
booksRouter.delete("/:categoryId", bookController.deleteBookById);
booksRouter.post("/:categoryId", bookController.updateBookById);

module.exports = booksRouter;
