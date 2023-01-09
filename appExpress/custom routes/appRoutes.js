// import routes from expres

const express = require("express");
const routes = express.Router();
// get the user data
var user = require("../custom data/data");

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

//check if user exist or not by id
routes.get("/user/find", (req, res) => {
  // consoles.log(req.id);
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

// Not working this time but will need in future

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

// adding data to storage
routes.post("/user/add", (request, respond) => {
  request.body.id = user.length + 1;

  user[user.length] = request.body;
  console.log(user[user.length - 1]);
  // console.log(request.body);
  console.log(user.length);
  respond.send("posting data");
});

// performing put operation
routes.put("/user/update/:id", (req, res) => {
  let { id } = req.params;
  id = Number(id);
  let { name, email } = req.body;
  console.log(typeof id);
  console.log(`${id}  ${name}`);

  // now find the id and change its name with given namew
  let update = false;
  user.find((val, index) => {
    if (val.id === id) {
      val.name = name;
      val.username = email;
      console.log(val);
      update = true;
    }
  });
  console.log(update);
  if (!update) {
    return res.send("Id not exist");
  }

  return res.send("updated ");
});

// performing delete operation on server without database
// Query String using with body parameters
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
    return res.send("ID not found");
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
