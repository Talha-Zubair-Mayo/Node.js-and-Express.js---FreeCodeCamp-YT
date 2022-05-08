const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.static(path.join("./public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./navbar-app/index.html"));
//   //   res.status(200).send("Hello World!");
// });

app.all("*", (req, res) => {
  res.status(400).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
