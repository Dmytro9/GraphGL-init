import express from "express";
const express = require("express");
const expressGraphGL = require("express-graphql"); // glue layer between express and graphgl

const app = express();
app.use(
  "/graphgl",
  expressGraphGL({
    graphigl: true
  })
);

app.listen(4000, () => console.log("listening"));
