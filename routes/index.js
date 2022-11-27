let express = require("express");
let router = express.Router();
let booksRouter = require("./books.routes");

router.get("/", (req, res, next) => {
  res.write("this is the base page");
  res.end();
});

//this is  for  Books
router.use("/ecomm/api/v1/books", booksRouter);

module.exports = router;
