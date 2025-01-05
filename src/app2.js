const express = require("express");
const app = express();
const port = 3000;
app.use(express.json()); // used for parsing json data
app.get("", () => {});
app.post("", () => {});
app.delete("", () => {});
app.listen(port, () => {
  console.log(`app is runnung on port : ${port}`);
});
