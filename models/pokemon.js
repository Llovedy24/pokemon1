const mongoose = require('mongoose')

// Make A Schema
const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  strength: { type: String, required: true },
  image: { type: String, required: true },
  isStronger: Boolean
}, { timestamps: true })

// Make A Model From The Schema

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

// Export The Model For Use In The App

module.exports = Pokemon
