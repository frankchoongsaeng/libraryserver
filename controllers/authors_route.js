const authorsRouter = require('express').Router();
const authors = require('../store/authors.json');

authorsRouter.get('/', (req, res) => {
  res.json(authors);
})

module.exports = authorsRouter;