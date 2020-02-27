const express = require('express');
const nunjucks = require('nunjucks');

const recipes = require('./data');

const server = express();

server.set("view engine", "njk");

server.use(express.static('public'));

nunjucks.configure("views", {
    express: server,
    noCache: true 
 });

server.get("/", function(req, res) {
    return res.render("index", { items : recipes });
});

server.get("/about", function(req, res) {
    return res.render("about");
});

server.get("/recipes", function(req, res) {
    return res.render("recipes", { items : recipes });
});

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = recipes[recipeIndex];

    return res.render("single", { recipe });
});

server.listen(5000, function() {
    console.log('Foodfy node server is running...')
});