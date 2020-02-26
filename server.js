const express = require('express');
const nunjucks = require('nunjucks');

const recipes = require('./data');

const server = express();

server.set("view engine", "njk");

server.use(express.static('public'));

nunjucks.configure("views", {
    express: server 
 });

server.get("/", function(req, res) {
    return res.render("index", { items : recipes });
});

server.get("/recipes", function(req, res) {
    return res.render("recipes", { items : recipes });
});

server.get("/about", function(req, res) {
    return res.render("about");
});

server.listen(5000, function() {
    console.log('Foodfy node server is running...')
});