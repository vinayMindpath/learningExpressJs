// import routes from expres
const express = require("express");
const aboutRoutes = express.Router();

// all the about routes
// about route
aboutRoutes.get("/", (req, res) => {
  res.send("<h1>Abouts</h1>");
});

// exports the routes
module.exports = aboutRoutes;
