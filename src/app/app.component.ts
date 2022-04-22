import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cooking-app';

  storedIngredients: any[] = [];

  onIngredientAdded(ingredient: any) {
   this.storedIngredients.push(ingredient);
  }
}
