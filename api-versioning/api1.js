var express = require("express");
// Creates a new router,a miniapplication
var api = express.Router();

//Example routes.You can add whatever routes or middleware you want.
api.get("/timezone", function(req, res) {
    res.send("Sample response for /timezone");
});

api.get("/all_timezones", function(req,res) {
    res.send("Sample response for /all_timezones");
});

//Exports the router so that other files can use it.
module.exports = api;
