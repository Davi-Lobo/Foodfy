const data = require('../database/data.json');

exports.index = function (req, res) {
    return res.render("admin/index", { items : data.recipes });
}

exports.show = function (req, res) {
    const { id } = req.params;

    const findRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id;
    });

    if(!findRecipe) {
        return res.send("Recipe not found");
    }

    const recipe = findRecipe;

    return res.render("admin/recipe", { recipe });
}