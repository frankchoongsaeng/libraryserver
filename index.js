const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const booksRouter = require('./controllers/books_route');
const authorsRoute = require('./controllers/authors_route');
const adminRoute = require('./controllers/admin_route');

app.use(bodyParser.json());

app.use('/books', booksRouter);

app.use('/authors', authorsRoute);

app.use('/admin', adminRoute);

app.use('/', (request, response) => {
  response.status(400).send("Invalid path: /");
});

app.listen(3001, () => {
  console.log("server is listening on port 3001");
});