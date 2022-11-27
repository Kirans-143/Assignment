let books = require("./../model/book");
let sequelizeInstance = require("../config/db.config");
let bodyParser = require("body-parser");
let express = require("express");
let expressApp = express();

let createTable = async () => {
  await sequelizeInstance.sync({ force: true });
  insertBooks();
  console.log("table created successfully");
};

let insertBooks = async () => {
  await books.bulkCreate([
    {
      name: "The Book thief",
      author: "markus",
    },
    {
      name: "The Graveyard Book",
      author: "Neil",
    },
    {
      name: "The NoteBook",
      author: "Nicholas",
    },
    {
      name: "The Jungle Book",
      author: "Rudyard",
    },
  ]);
};

let getAllBooks = async (req, res, next) => {
  let Books = await books.findAll();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(Books));
  res.end();
};

let getBookById = async (req, res, next) => {
  let id = req.params.categoryId;
  if (!id) {
    res.status(400).send("ID not passed");
  }

  let Books = await books.findAll({
    where: {
      id: id,
    },
  });
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(Books));
  res.end();
};

let addNewBook = async (req, res, next) => {
  await books.create({
    name: req.body.name,
    author: req.body.author,
  });

  res.status(200).send("book added");
  res.end();
};

let deleteBookById = async (req, res, next) => {
  let id = req.params.categoryId;
  await books.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).send("book deleted");
  res.end();
};

let updateBookById = async (req, res, next) => {
  let bookToUpdate = {
    name: req.body.name,
  };
  let Books = await Books.update(bookToUpdate, {
    where: {
      categoryId: id,
    },
  });
  let updateBook = await Books.findByPk(id);
  res.status(200).send(updateBook);
};

createTable();
//inserCategories();

module.exports = {
  getAllBooks,
  getBookById,
  addNewBook,
  deleteBookById,
  updateBookById,
};
