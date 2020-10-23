const booksRouter = require('express').Router();
const books = require('../store/books.json');

booksRouter.get('/', (req, res) => {
  res.json(books);
})

module.exports = booksRouter;