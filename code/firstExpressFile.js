// import { require } from "http";
// const express = require("express");
import express from "express";
const app = express();

// creating things
app.get("/", (req, res) => {
  console.log("User using resources");
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

// the port number
app.listen(5000, () => {
  console.log(`listening on 5000`);
});
