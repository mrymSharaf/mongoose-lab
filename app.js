const {
    getRecipeById,
    deleteRecipe,
    updateRecipe,
    getAllRecipes,
    createRecipe
} = require('./recipeUtils.js')

createRecipe({
    name: "Pink Pasta",
    ingredients: ["Pasta", "Cream", 'Tomato Sause'],
    instructions: 'cook the pasta and then add the cream with tomato sause',
    prepTime: 60,
    difficulty: "Easy"
})

// updateRecipe('687feb049609d7dcb5bcc8b3', {
//     name: "Pink Pasta",
//     ingredients: ["Pasta", "Cream", 'Tomato Sause'],
//     instructions: 'cook pasta then add the cream and tomato sause',
//     prepTime: 65,
//     difficulty: "Easy"
// })

// getAllRecipes()
// deleteRecipe('687feb049609d7dcb5bcc8b3')
// getRecipeById('687feba6f02f06db053edbf4')
