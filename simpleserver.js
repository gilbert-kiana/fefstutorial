const express = require("express");
const app = express();

app.get("/demo", (req, res) => {
  res.set("Gil", "Intab0");
  res.status(418);
  res.send("Trying out creating custom header and status code");
});
