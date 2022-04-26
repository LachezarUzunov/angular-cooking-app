import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private recipes: Recipe[] = [];
  private recipesUpdated = new Subject<Recipe[]>();

  constructor(private http: HttpClient) {}

  getRecipes() {
    this.http
      .get<{ message: string; allRecipes: any }>(
        'http://localhost:3000/api/recipes'
      )
      .pipe(
        map((recipeData) => {
          return recipeData.allRecipes.map((recipe: any) => {
            return {
              id: recipe._id,
              title: recipe.title,
              ingredients: recipe.ingredients,
              preparation: recipe.preparation,
              categories: recipe.categories,
              suitableFor: recipe.suitableFor,
            };
          });
        })
      )
      .subscribe((recipeData) => {
        this.recipes = recipeData;
        this.recipesUpdated.next([...this.recipes]);
      });
  }

  getRecipeById(recipeId: string) {
    return { ...this.recipes.find((r) => r.id === recipeId) };
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
      id: null,
      title: title,
      ingredients: ingredients,
      preparation: preparation,
      categories: categories,
      suitableFor: suitableFor,
    };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/recipes', newRecipe)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.recipes.push(newRecipe);
        this.recipesUpdated.next([...this.recipes]);
      });
  }
}
