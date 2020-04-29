const fs = require('fs');

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


exports.create = function(req, res) {
    return res.render("admin/create");
}


exports.post = function(req, res) {
    const keys = Object.keys(req.body);

    for(key of keys) {
        if (req.body[key] == "") {
            return res.send("Por favor, insira todos os campos.")
        }
    }

    let { author, title, image, ingredients, preparation, additional } = req.body;

    const id = Number(data.recipes.length + 1);

    data.recipes.push({
        id,
        author,
        title,
        image,
        ingredients,
        preparation,
        additional
    })

    const dataDir = '../database';

    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }

    fs.writeFile("database/data.json", JSON.stringify(data, null, 2), function(err){

        if (err) {
            return res.send("Write file error");
        }

        return res.redirect("/admin");
    });
}


exports.edit = function(req, res) {
    const { id } = req.params;

    const findRecipe = data.recipes.find(function(recipe) {
        return recipe.id == id;
    });

    if(!findRecipe) {
        return res.send("Recipe not found");
    }

    const recipe = findRecipe;
    
    return res.render('admin/edit', { recipe });
}


exports.put = function(req, res) {
    const { id } = req.body;
    
    let index = 0;

    const findRecipe = data.recipes.find(function(recipe, foundIndex) {
        if (id == recipe.id) {
            index = foundIndex;
            
            return true;
        }
    });

    if(!findRecipe) {
        return res.send("Recipe not found");
    }

    const recipe = {
        ...findRecipe,
        ...req.body,
    };

    data.recipes[index] = recipe;

    fs.writeFile("database/data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send("Write file error!");
        }

        return res.redirect(`/admin/recipes/${id}`);
    });
}

exports.delete = function(req, res) {
    console.log('deletou')
    const { id } = req.body;

    const filteredRecipes = data.recipes.filter(function(recipe) {
        return recipe.id != id;
    });

    data.recipes = filteredRecipes;

    fs.writeFile("database/data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send("Write file error!");
        }

        return res.redirect("/admin");
    });
}