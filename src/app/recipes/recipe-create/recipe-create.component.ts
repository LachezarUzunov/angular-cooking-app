import { Component } from '@angular/core';

import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css'],
})
export class RecipeCreateComponent {
  checkboxesDataList = [
    { id: '1', label: 'vegetarian', isChecked: false },
    { id: '2', label: 'soup', isChecked: false },
    { id: '3', label: 'salad', isChecked: false },
    { id: '4', label: 'meat', isChecked: false },
    { id: '5', label: 'dessert', isChecked: false },
    { id: '6', label: 'pizza', isChecked: false },
    { id: '7', label: 'pasta', isChecked: false },
    { id: '8', label: 'under 30 mins', isChecked: false },
  ];

  checkedIds: string[] = [];
  selectedCategories: Object[] = [];

  enteredTitle: string = '';
  enteredProduct: string = '';
  enteredQuantity: Number = 0;
  selectedType: string = '';
  enteredSteps: string = '';
  selectedSuitable: Number = 0;
  id: any;

  constructor(public recipesService: RecipesService) {}

  products: any[] = [];

  changeSelection() {
    this.fetchSelectedItems();
  }

  ngOnInit(): void {
    this.fetchSelectedItems();
    this.fetchCheckedIds();
  }

  fetchSelectedItems() {
    this.selectedCategories = this.checkboxesDataList.filter((c) => {
      return c.isChecked;
    });
  }

  fetchCheckedIds() {
    this.checkedIds = [];
    this.checkboxesDataList.forEach((c) => {
      if (c.isChecked) {
        this.checkedIds.push(c.id);
      }
    });
  }

  onIngredientAdd() {
    const ingredient = {
      product: this.enteredProduct,
      quantity: this.enteredQuantity,
      type: this.selectedType,
    };

    this.products.push(ingredient);
  }

  onRecipeCreate() {
    this.recipesService.addRecipe(
      this.enteredTitle,
      this.products,
      this.enteredSteps,
      this.selectedCategories,
      Number(this.selectedSuitable)
    );
  }
}
