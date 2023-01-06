const express = require("express");
const homeRoute = express.Router();

// Home route
homeRoute.get("/", (req, res) => {
  res.send("<h1>Home</h1></ br>");
  console.log(req.query);
});

// export the home route
module.exports = homeRoute;
