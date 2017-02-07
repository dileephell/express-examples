var express = require("express");
var path = require("path");

var app = express();

//Tells Express that any file ending in .ejs should be rendered with the ejs package.
app.set("view engine", "ejs");

// Tells Express where the views folder is
app.set("views", path.resolve(__dirname,"views"));

// Renders a file called index when you visit the root
app.get("/", function(req,res){
    res.render("index");
});

// Starte the server on port 3000
app.listen(3000);
