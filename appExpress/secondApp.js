// learning express js
const express = require("express");
const app = express();

/* MIDDILE WARE CUSTOM AND BUILT IN*/
// built-in morgan middleware
const morgan = require("morgan");
const logger = require("./custom middleware/logger");
const authorize = require("./custom middleware/middleware2");

//*DIFFERENT ROUTES* */
//  importing all the required routes
const homeRoutes = require("./custom routes/homeRoute");
// get api routes
const apiRoutes = require("./custom routes/apiRoutes");
// about routes
const aboutRoutes = require("./custom routes/aboutRoutes");

// pass middleware to every get method
app.use(express.static("./public"));
app.use([logger, authorize]);
app.use(morgan("tiny"));

// setting up the different routes
app.use("/", homeRoutes);
app.use("/api", apiRoutes);
app.use("/about", aboutRoutes);

app.listen(3000, () => {
  console.log("listening to the port 3000");
});
