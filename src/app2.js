const express = require("express");
const app = express();
const port = 3000;
app.get("", () => {});
app.post("", () => {});
app.delete("", () => {});
app.listen(port, () => {
  console.log(`app is runnung on port : ${port}`);
});