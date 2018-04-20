var path = require("path");
var tables = require('../data/tables');


module.exports = function(app) {

  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

  app.get("/api/tables/:table", function(req, res) {
    var chosen = req.params.table;

    console.log(chosen);

    for (var i = 0; i < tables.length; i++) {
      if (chosen === tables[i].uniqueID);
      return res.json(tables[i]);
    }

    return res.json(false);
  });

  app.post("/api/tables", function(req, res) {

    var newTable = req.body;

    console.log(newTable);

    tables.push(newTable);

    res.json(newTable);
  });
}