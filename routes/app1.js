var express = require("express");
var path = require("path");
var apiRouter = require("./routes/api_router");

var app = express();

var staticPath = path.resolve(__dirname, "static");
app.use(express.static(staticPath));

app.use("/api",apiRouter);

app.listen(3000);



// A sample Router definition at routes/api_router.js

var express= require("express");

var ALLOWED_IPS = ["127.0.0.1","123.456.7.89"];

var api = express.Router();

api.use(function(req, res, next) {
    var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
    if(!userIsAllowed) {
        res.status(401).send("Not Authorised");
    } else {
        next();
    }
});

api.get("/users",function(req, res) { /* ... */});
api.post("/user",function(req, res) { /* ... */});

module.exports = api;































