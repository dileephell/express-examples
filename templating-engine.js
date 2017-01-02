var express = require('express');
var path = require('path');
var http = require('http');

var app = express();
// Tells express that your views will be in a  folder called views
app.set("views",path.resolve(__dirname, "views"));

//tells Express that you're going to use the EJS templating engine
app.set("view engine","ejs");

//Rendering a view from Expres
app.get("/", function(req, res){
    res.render("index", {
        message: "Hey everyone ! This is my Webpage."
    });
});


http.createServer(app).listen(3000);

----------index.ejs---------------

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello,World!!!</title>
  </head>
    
  <body>
    <%= message %>
  </body>    
</html>














