const express = require('express');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');

const routes = require('./routes');

const server = express();

server.set("view engine", "njk");

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use(methodOverride('_method'));

nunjucks.configure("views", {
    express: server,
    noCache: true 
});

server.use(routes);

server.listen(5000, function() {
    console.log('Foodfy node server is running...')
});