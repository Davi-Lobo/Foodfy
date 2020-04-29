const express = require('express');

const data = require('./database/data.json');
const recipes = require('./controllers/recipes');

const routes = express.Router();


routes.get("/", function(req, res) {
    return res.render("index", { items : data.recipes });
});

routes.get("/about", function(req, res) {
    return res.render("about");
});

routes.get("/recipes", function(req, res) {
    return res.render("recipes", { items : data.recipes });
});

routes.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;
    const recipe = data[recipeIndex];

    return res.render("single", { recipe });
});


// Admin
routes.get("/admin", function(req, res) {
    res.redirect("/admin/recipes");
});

routes.get("/admin/recipes", recipes.index);

routes.get("/admin/recipes/create", recipes.create);
routes.post("/admin/recipes/create", recipes.post);

routes.get("/admin/recipes/:id", recipes.show);
routes.get("/admin/recipes/:id/edit", recipes.edit);

routes.put("/admin/recipes", recipes.put);
routes.delete("/admin/recipes", recipes.delete);

module.exports = routes;