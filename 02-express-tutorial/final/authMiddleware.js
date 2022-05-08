const AuthMiddleware = (req, res, next) => {
  if (req.headers.authorization === "john") {
    console.log("Authorized");
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = AuthMiddleware;
