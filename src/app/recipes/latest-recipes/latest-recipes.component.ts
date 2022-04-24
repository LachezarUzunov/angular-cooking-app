import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-latest-recipes',
  templateUrl: './latest-recipes.component.html',
  styleUrls: ['./latest-recipes.component.css'],
})
export class LatestRecipesComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  private recipesSub: Subscription;

  constructor(public recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
    this.recipesSub = this.recipesService
      .getRecipeUpdateListener()
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  }

  ngOnDestroy(): void {
    this.recipesSub.unsubscribe();
  }
}
