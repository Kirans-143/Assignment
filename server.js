let express = require("express");
let bodyParser = require("body-parser");
let serverConfig = require("./config/server.config");
let router = require("./routes/index");
let expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);

expressApp.listen(serverConfig.PORT, () => {
  console.log("server is running on port " + serverConfig.PORT);
});
