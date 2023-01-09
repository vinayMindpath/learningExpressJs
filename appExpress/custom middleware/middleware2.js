// console the middleware

let getId = (req, res, next) => {
  // const { user } = req.query;
  const { id } = req.query;
  console.log(Number(id));
  if (Number(id)) {
    // console.log(user);
    req.id = Number(id);
    // console.log(req.id);
  }
  next();
};

let getData = (req, res, next) => {
  const data = req.query;
  req.data = data;
  console.log(data);
  next();
};

module.exports = { getId, getData };
