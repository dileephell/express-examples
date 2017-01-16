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


// The Simplest Parameter that matches the requests coming into /users/1234 or /users/horse_ebooks
app.get("/users:/userid",function(req, res) {
    var userId = parseInt(req.params.userid, 10);
    ...
});
