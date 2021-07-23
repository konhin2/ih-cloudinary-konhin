// 1. IMPORTACIÓN
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 2. SCHEMA
const moviesSchema = new Schema(
    {
        title: String,
        description: String,
        imageUrl: String,
    },
    {
        timestamps: true
    }
)
// 3. MODELO
const Movie = mongoose.model('Movies', moviesSchema)
// 4. EXPORTACIÓN
module.exports = Movie