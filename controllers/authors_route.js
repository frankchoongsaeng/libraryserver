const authorsRouter = require('express').Router();

const user = require('./user');
const authors = require('../store/authors.json');

authorsRouter.get('/:a_id/books', (req, res) => {
  let id = null;
  let response = null

  try {
    // check if the id was provided
    id = req.params.a_id;
    
    // check that the id provided was a number and 
    // the number is within range.
    // maybe return an empty object if the id was not found
    if ( !isNaN(id) && (id % 1 === 0) ) {
      
      if( id >= 0 && id < authors.length) {
        response = authors[id].books;
        res.status(200);
      } else {
        response = { "response" : "Oops, could not find an author with that id. That Id does not exist in our authors collections" };
        res.status(200)
      }

    } else {
      response = {"response" : "could not find an author with that id. Id's must be an integer"}
      res.status(400);
    }

  } catch ( missingIdError ) {
    console.log(missingIdError)
    response = { "response" : "could not find an auhtors id, please provide an id" };
    res.status(400);
  }

  res.send(response)
});

authorsRouter.get('/:id', (req, res) => {
  let id = null;
  let response = null

  try {
    // check if the id was provided
    id = req.params.id;
    
    // check that the id provided was a number and 
    // the number is within range.
    // return an empty object if the id was not found
    if ( !isNaN(id) && (id % 1 === 0) ) {
      
      if( id >= 0 && id < authors.length) {
        response = authors[id];
        res.status(200);
      } else {
        response = { "response" : "Oops, could not find an author with that id. That Id does not exist in our authors collections" };
        res.status(200)
      }

    } else {
      response = {"response" : "could not find an author with that id. Id's must be an integer"}
      res.status(400);
    }

  } catch ( missingIdError ) {
    console.log(missingIdError)
    response = { "response" : "could not find an id, please provide an id" };
    res.status(400);
  }

  res.send(response)
});

authorsRouter.get('/', (req, res) => {
  res.json(authors);
})


authorsRouter.post('/', (req, res) => {

});

authorsRouter.use((req, res) => {
  res.send( { "response": "could not find the specified path" } )
});

module.exports = authorsRouter;