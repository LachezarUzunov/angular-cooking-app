const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: Array, required: true },
  preparation: { type: String, required: true },
  categories: { type: Array, required: true },
  suitableFor: { type: Number, required: true },
});

module.exports = mongoose.model("Recipe", recipeSchema);
