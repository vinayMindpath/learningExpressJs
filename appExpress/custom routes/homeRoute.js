const express = require("express");
const homeRoute = express.Router();

// Home route
homeRoute.get("/", (req, res) => {
  res.send("Welcome to the app server");

  console.log(req.app);
  console.log(req.query);
});

// export the home route
module.exports = homeRoute;
