// console the middleware

let authorize = (req, res, next) => {
  const { user } = req.query;
  const { id } = req.query;
  console.log(Number(id));
  if (Number(id)) {
    // console.log(user);
    req.id = Number(id);
    next();
  }
};

module.exports = authorize;
