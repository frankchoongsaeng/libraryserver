const adminRouteHandler = require('express').Router();

adminRouteHandler.get('/', (req, res) => {
  res.send("Everything is working at the admin end")
});

module.exports = adminRouteHandler;