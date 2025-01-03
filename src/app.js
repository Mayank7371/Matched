const express = require("express");
const { log } = require("node:console");
const app = express();
const port = 3000;

app.use("/", (req, res) => {
  res.send("hi there");
});
app.get("/getroute", (req, res) => {
  res.send("GET request");
});

app.post("/postroute", (req, res) => {
  res.send("POST request");
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
