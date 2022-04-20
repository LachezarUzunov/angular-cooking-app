import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientListComponent } from './recipes/ingredients-input-list/ingredient-list.component';
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create.component';

@NgModule({
  declarations: [AppComponent, RecipeCreateComponent, IngredientListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
