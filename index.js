var express = require("express");
var app = express();

const path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(process.env.PORT ?? 3000, function () {
  console.log(`Listening on port ${process.env.PORT ?? 3000}...`);
});
