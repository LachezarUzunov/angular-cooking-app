import { Component } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Be The Cook Star';

  storedRecipes: Recipe[] = [];

  onRecipePublished(recipe: Recipe) {
    this.storedRecipes.push(recipe);
  }
}
