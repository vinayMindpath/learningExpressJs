const express = require("express");
const homeRoute = express.Router();

// Home route
homeRoute.get("/", (req, res) => {
  res.send("<h1>Home</h1></ br>");
  // res.set({
  //   "content-type": "text/plain",
  //   "content-length": "123",
  //   Etag: "12345",
  // });
  // res.get("content type");
  console.log(req.app);
  console.log(req.query);
});

// export the home route
module.exports = homeRoute;
