const express = require("express");
const app = express();
const port = 3000;
app.use(
  "/endpoint",
  (req, res, next) => {
    console.log(`request read`);
    res.send("header");
    next();
  },
  (req, res) => {
    res.send("header 2");
  }
);
app.listen(port, () => {
  console.log(`app is runnung on port : ${port}`);
});
