import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private recipes: Recipe[] = [];
  private recipesUpdated = new Subject<Recipe[]>();

  constructor(private http: HttpClient) {}

  getRecipes() {
    this.http
      .get<{ message: string; allRecipes: Recipe[] }>(
        'http://localhost:3000/api/recipes'
      )
      .subscribe((recipeData) => {
        this.recipes = recipeData.allRecipes;
        this.recipesUpdated.next([...this.recipes]);
      });
  }

  getRecipeUpdateListener() {
    return this.recipesUpdated.asObservable();
  }

  addRecipe(
    title: string,
    ingredients: Array<[]>,
    preparation: string,
    categories: Object[],
    suitableFor: Number
  ) {
    const newRecipe: Recipe = {
      title: title,
      ingredients: ingredients,
      preparation: preparation,
      categories: categories,
      suitableFor: suitableFor,
    };

    this.recipes.push(newRecipe);
    this.recipesUpdated.next([...this.recipes]);
  }
}
