<<<<<<< HEAD
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
=======

>>>>>>> 4c1337de8aa9ce946a528c0c99853cd6f93cb358
