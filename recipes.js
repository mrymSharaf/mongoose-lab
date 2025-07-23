const mongoose = require('mongoose')

async function connectToDB() {
    try {
        await mongoose.connect('mongodb+srv://mrymSharaf:Kz3mx2h5@cluster0.gzjeawv.mongodb.net/recipesDB?retryWrites=true&w=majority&appName=Cluster0')
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

