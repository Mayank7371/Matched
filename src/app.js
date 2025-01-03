const express = require("express");
const { log } = require("node:console");
const app = express();
const port = 3000;

app.get("/user", (req, res) => {
  console.log(req.query);
  // URL is // http:localhost:3000/user?userId=101&username=mayank
});
app.get("/user/:userId/:name/:password", (req, res) => {
  // URL is localhost:3000/user?userId=101&name=mayank&password=mayank@101
  // these are called dynamic route handler
  console.log(req.params);
});
app.post("/postroute", (req, res) => {
  res.send("POST request");
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

// comments
//  work for /abc /ac
// app.get("/ab?c", (req, res) => {
//   res.send("GET request");
// });
//  works for /ad /abcd
// app.get("/a(bc)?d", (req, res) => {
//   res.send("GET request");
// });
// work for /abc /abbbbbbc
// app.get("/ab+c", (req, res) => {
//   res.send("GET request");
// });
// work for /abhellotherecd
// app.get("/ab*cd", (req, res) => {
//   res.send("GET request");
// });
