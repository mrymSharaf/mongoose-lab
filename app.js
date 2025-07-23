const {
    getRecipeById,
    deleteRecipe,
    updateRecipe,
    getAllRecipes,
    createRecipe
} = require('./recipeUtils.js')

// createRecipe({
//     name: "Um Ali",
//     ingredients: ["Puff Pastry", "Milk"],
//     instructions: "bake at 180C",
//     prepTime: 120,
//     difficulty: "Medium"
// })

updateRecipe('68808b6f095875d9249719e0', {
    name: "Pink Pasta",
    ingredients: ["Pasta", "Cream", 'Tomato Sause'],
    instructions: 'cook pasta then add the cream and tomato sause',
    prepTime: 60,
    difficulty: "Easy"
})

// getAllRecipes()
// deleteRecipe('68808b978fcb76fc8fe261c7')
// getRecipeById('68808b978fcb76fc8fe261c7')
