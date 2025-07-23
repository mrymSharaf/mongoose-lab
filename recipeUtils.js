const Recipe = require('./recipes')
module.exports = {
    getRecipeById,
    deleteRecipe,
    updateRecipe,
    getAllRecipes,
    createRecipe
}

async function createRecipe(newRecipe) {
    try {
        const addNewRecipe = await Recipe.create(newRecipe)
        console.log(addNewRecipe)

    } catch (error) {
        console.log("Failed to create recipe.")
    }
}


async function getAllRecipes() {
    try {
        const allRecipes = await Recipe.find()
        console.log(allRecipes)
        for (const r of allRecipes) {
            console.log(`${r.name} is an ${r.difficulty} recipe and takes ${r.prepTime} minutes to prepare`)
        }

    } catch (error) {
        console.log('error', error)
    }
}


async function updateRecipe(recipeId, newRecipeData) {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, newRecipeData, { new: true })
        console.log(updatedRecipe)

    } catch (error) {
        console.log('error')
    }
}


async function deleteRecipe(recipeId) {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(recipeId)
        console.log(deletedRecipe)
        console.log('Recipe successfully deleted.')
    } catch (error) {
        console.log('error')
    }
}


async function getRecipeById(id) {
    try {
        const recipeByID = await Recipe.findById(id)
        console.log(recipeByID)
    } catch (error) {
        console.log("No recipe with this ID exists.")
    }
}

