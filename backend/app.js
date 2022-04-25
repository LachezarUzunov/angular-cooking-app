const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/api/recipes", (req, res, next) => {
  const recipe = req.body;
  res.status(201).json({
    message: "Recipe added successfully",
  });
});

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

app.get("/api/recipes", (req, res, next) => {
  const recipes = [
    {
      title: "soupe",
      ingredients: ["carrots", "onion"],
      preparation: "do this and this steps",
      categories: ["vegetarian", "salad"],
      suitableFor: 2,
    },
    {
      title: "soupe",
      ingredients: ["carrots", "onion"],
      preparation: "do this and this steps",
      categories: ["vegetarian", "salad"],
      suitableFor: 2,
    },
  ];
  res.status(200).json({
    message: "Recipes fetched successfully",
    allRecipes: recipes,
  });
});

module.exports = app;
