var express = require("express");

//Requires and uses the router
var apiVersion1 = require("./api1.js");
var apiVersion2 = require("./api2.js");

var app = express();

app.use("/v1", apiVersion1);
app.use("/v2", apiversion2);

app.listen(3000,function() {
    console.log("App started in port 3000");
});
