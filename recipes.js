const mongoose = require('mongoose')

async function connectToDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/recipesDB ')
        console.log('connected to database')
    } catch (error) {
        console.log('error connecting to the database')
    }
}
connectToDB()

const recipeSchems = {
    name: {
        type: String,
        required: true
    },
    ingredients: [String],
    instructions: String,
    prepTime: Number,
    difficulty: {
        type: String,
        enum: {
            values: ['Easy', 'Medium', 'Hard'],
            default: 'Easy'
        }
    }
}

const Recipe = mongoose.model('Recipe', recipeSchems )
module.exports = Recipe

