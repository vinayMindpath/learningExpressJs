// import routes from expres
const { captureRejectionSymbol } = require("events");
const { query, response } = require("express");
const express = require("express");
const routes = express.Router();
// get the user data
var user = require("../custom data/data");
const { route } = require("./homeRoute");

// api/products router
routes.get("/products", (req, res) => {
  res.send("<h1>Product list</h1>");
});

// item
routes.get("/items", (req, res) => {
  console.log(req.user);
  res.send("<h1>Items</h1>");
});

// api
routes.get("/", (req, res) => {
  res.send("<h1>Apis</h1>");
});

routes.get("/user", (req, res) => {
  res.status(200).json(user);
});

// Not working this time but will need in future
/*
routes.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  let person = user.find((ele, index) => {
    if (ele.id == Number(req.params.id)) {
      console.log(ele.id);
      // console.log(index);
      return index;
    }
  });
  if (person) {
    return res.status(200).json(person);
    console.log(person);
  } else if (Number(req.params.id) === 1) {
    return res.status(200).json(user[0]);
  } else {
    // console.log(req.params.id);
    return res.status(200).json({ success: true, data: user, id: req.id });
  }
  // res.status(200).jsonp(user);
});
*/
routes.get("/user/find", (req, res) => {
  console.log(req.id);
  let person = user.find((ele, index) => {
    // console.log(ele);
    if (ele.id === req.id) {
      console.log(`in route : ${ele.id}`);
      // console.log(index);
      return index;
    }
  });
  console.log(person);
  if (person) {
    return res.status(200).json(person);
    // console.log(person);
  } else if (req.id === 1) {
    return res.status(200).json(user[0]);
  } else {
    // console.log(req.params.id);
    return res.status(200).json({ success: true, data: user, id: req.id });
  }

  // res.status(200).jsonp(user);
});

// adding data to storage
routes.post("/user/add", (request, respond) => {
  request.data.id = user.length + 1;
  console.log(request.data);
  // respond.write(reqest.body.name);
  user[user.length] = request.data;
  // console.log(user[user.length - 1]);
  console.log(user.length);
  respond.send("posting data");
});

// performing delete operation on server without database
routes.delete("/user/delete", (req, res) => {
  let data = req.query;
  console.log(data);
  console.log(user.length);
  let found = user.find((value) => {
    if (value.id === Number(data.id)) {
      console.log(value);
      return value;
    }
  });
  if (!found) {
    console.log("either deleted or not available");
  }
  user = user.filter((value) => {
    if (value.id !== Number(data.id)) {
      return value;
    }
  });
  // res.write("Deleted");
  console.log(user.length);
  return res.send("deleted");
});
// now export all the functionality
module.exports = routes;
