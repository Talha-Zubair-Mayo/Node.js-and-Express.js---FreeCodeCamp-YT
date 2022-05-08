const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const products = require("./data");

app.get("/", (req, res) => {
  res.status(200).json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
