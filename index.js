const express = require("express");
var cors = require('cors');
const app = express();

app.use(cors());
require("./startup/routes")(app);
require("./startup/db")();

const port = process.env.PORT || 8081;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;
