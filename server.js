const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.set("view engine", "njk");

server.use(express.static('public'));

nunjucks.configure("views", {
    express: server 
 });

server.get("/", function(req, res) {
    return res.render("index");
});

server.get("/recipes", function(req, res) {
    return res.render("recipes");
});

server.get("/about", function(req, res) {
    return res.render("about");
});

server.listen(5000, function() {
    console.log('Foodfy node server is running...')
});