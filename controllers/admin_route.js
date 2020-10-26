const adminRouteHandler = require('express').Router();
const jwt = require('jsonwebtoken');
const { authenticateUser, getUserFullName, getUserName } = require('./user');

adminRouteHandler.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let response = {};

  let user_token = authenticateUser(username, password);

  if( user_token ) {
      
      response.token = user_token;
      response.username = getUserName();
      response.name = getUserFullName();

      res.status(200);
      res.send(response)

  } else {

    res.status(401);
    response.response = "password or username was incorrect";
    res.send(response);

  }
});

adminRouteHandler.post('/logout', (req, res) => {
  
});

module.exports = adminRouteHandler;