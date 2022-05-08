const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const products = require("./data");

app.get("/", (req, res) => {
  res.send(
    "<h1>Hello World</h1> <a href='/api/products'>Browse products</a>  "
  );
});

app.get("/api/products", (req, res) => {
  res.send(products.products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
