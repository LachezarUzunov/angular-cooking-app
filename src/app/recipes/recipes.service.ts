import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipesService {
  private recipes: Recipe[] = [];
  private recipesUpdated = new Subject<Recipe[]>();

  getRecipes() {
    return [...this.recipes];
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
