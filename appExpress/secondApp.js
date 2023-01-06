// learning express js
const express = require("express");
// const { emitWarning } = require("process");
const app = express();
const morgan = require("morgan");
// importing middleware
const logger = require("./logger");
const authorize = require("./middleware2");

// pass middleware to every get method
app.use(express.static("./public"));
app.use([logger, authorize]);
app.use(morgan("tiny"));
// Home route
app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

// about route
app.get("/about", (req, res) => {
  res.send("<h1>Abouts</h1>");
});

// api/products router
app.get("/api/products", (req, res) => {
  res.send("<h1>Product list</h1>");
});

// item
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("<h1>Items</h1>");
});

// api
app.get("/api", (req, res) => {
  res.send("<h1>Apis</h1>");
});

app.listen(3000, () => {
  console.log("listening to the port 3000");
});
// app.listen(3000);
