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
=======
const fs = require("node:fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Synchronous
fs.readFileSync("./file.txt", "utf8"); // 10 ms
console.log("This will execute only after file read");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
>>>>>>> 0718c5eefa2e9e766cab7b4b1536fc573da3020b
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

// Async function
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data : ", data);
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);
