const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const User = require("./models/user");
const Recipe = require("./models/recipe");

const app = express();

mongoose
  .connect(
    "mongodb+srv://lacho:6Bat6ExsAwATvB1n@cookingapp.cocdr.mongodb.net/cookingApp?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("connection failed");
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/recipes", (req, res, next) => {
  const recipe = new Recipe({
    title: req.body.title,
    ingredients: req.body.ingredients,
    preparation: req.body.preparation,
    categories: req.body.categories,
    suitableFor: req.body.suitableFor,
  });

  console.log(recipe);
  recipe.save();

  res.status(201).json({
    message: "Recipe added successfully",
  });
});

// pass
// 6Bat6ExsAwATvB1n
// user
// lacho

app.use("/api/recipes", (req, res, next) => {
  Recipe.find().then((docs) => {
    res.status(200).json({
      message: "Recipes fetched successfully",
      allRecipes: docs,
    });
  });
});

module.exports = app;
