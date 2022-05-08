const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const products = require("./data");

app.get("/api/products/:id", (req, res) => {
  console.log(req.params.id);
  const product = products.products.find(
    (product) => product.id === parseInt(req.params.id)
  );
  if (!product) {
    res.status(404).send("Product not found");
    return;
  }

  res.json(product);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
