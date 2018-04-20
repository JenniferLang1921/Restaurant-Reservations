var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "public/reservations.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "public/tables.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});