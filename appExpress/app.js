// learning express js
const express = require("express");
// const { emitWarning } = require("process");
const app = express();

app.get("/", (request, response) => {
  console.log("user entered");
  //   response.sendStatus(500);
  //   response.status(404).send("hii");
  response.send("<h1>Welcome to server</h1>");
  response.download("package.json");
  response.render("path to the file");
});

app.listen(3000, () => {
  console.log("listening to the port 3000");
});
// app.listen(3000);
