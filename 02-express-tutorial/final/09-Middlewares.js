const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const loggerMiddleware = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const year = new Date().getFullYear();
  console.log(`${method} ${url} - ${year}`);
  next();
};

app.get("/", loggerMiddleware, (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
