var express = require("express");
var app = express();

// Routes GET requests to /dileep to the request handler
app.get("/dileep",function(req, res) {
    res.send("Welcome to Dileep's Homepage!!");
});

// If you load something other than /dileep,serves a 404 error.
app.use(function(req, res) {
    res.status(404).send("Page Not Found!");
});

// Starts the server on port 3000
app.listen(3000);
