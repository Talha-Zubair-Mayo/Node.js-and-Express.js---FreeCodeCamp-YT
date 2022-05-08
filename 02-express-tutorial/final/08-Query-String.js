const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const { products } = require("./data");

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  console.log(search, limit);
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(`${search}`)
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length > 0) {
    res.json({
      status: "success",
      message: `${sortedProducts.length} products found`,
      data: sortedProducts,
    });
  } else {
    res.status(404).json({
      status: "failure",
      message: "No products found",
      data: [],
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
