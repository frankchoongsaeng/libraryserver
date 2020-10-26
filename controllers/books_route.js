const booksRouter = require('express').Router();
const books = require('../store/books.json');


booksRouter.get('/:id', (req, res) => {
  let id = null;
  let response = null

  try {
    // check if the id was provided
    id = req.params.id;

    // check that the id provided was a number and 
    // the number is within range.
    // return an empty object if the id was not found
    if ( !isNaN(id) && (id % 1 === 0) ) {
      
      if( id >= 0 && id < books.length) {
        response = books[id];
        res.status(200);
      } else {
        response = { "response" : "Oops, could not find a book with that id. That Id does not exist in our books collections" };
        res.status(200)
      }

    } else {
      response = {"response" : "could not find a book with that id. Id's must be an integer"}
      res.status(400);
    }

  } catch ( missingIdError ) {
    response = { "response" : "could not find an id, please provide an id" };
    res.status(400);
  }

  res.send(response)
});

booksRouter.get('/', (req, res) => {
  res.json(books);
})

booksRouter.post('/', (req, res) => {
  
});

booksRouter.use((req, res) => {
  res.send( { "response" : "could not match a path" } );
});

module.exports = booksRouter;