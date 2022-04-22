import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'],
})
export class IngredientListComponent {
  // ingredients = [
  //   { ingredient: 'carrot', quantity: 5, type: 'pieces' },
  //   { ingredient: 'carrot', quantity: 5, type: 'pieces' },
  // ];

  @Input() ingredients: any[] = [];

}
