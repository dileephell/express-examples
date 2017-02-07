var express = require("express");
var api = express.Router();

//Example routes
api.get("/timezone", function(req, res) {
    res.send("Api 2: Super cool new response for /timezone");
});

module.exports = api;
