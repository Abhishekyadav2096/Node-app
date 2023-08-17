const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("ABHISHEK YADAV");
});

app.listen(5001, () => {
  console.log(`Server Started at ${5001}`);
});
