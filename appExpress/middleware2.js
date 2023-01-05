// console the middleware

let authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    console.log(user);
    req.user = { name: "john", id: 3 };
    next();
  } else {
    res.status(401).send("<h1>unauthorized</h1>");
    // next();
  }
};

module.exports = authorize;
