import { Component} from "@angular/core";

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent {
  enteredProduct = '';
  enteredQuantity: Number = 0;
  selectedType: string = '';
 // @Output() ingredientCreated = new EventEmitter();

  products: any[] = [];

  onIngredientAdd() {
    const ingredient = {
      product: this.enteredProduct,
      quantity: this.enteredQuantity,
      type: this.selectedType,
    }

    this.products.push(ingredient);
   // this.ingredientCreated.emit(ingredient);
  }
}
