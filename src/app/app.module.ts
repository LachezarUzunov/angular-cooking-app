import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientListComponent } from './recipes/ingredients-input-list/ingredient-list.component';
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create.component';
import { HeaderComponent } from './header/header.component';
import { LatestRecipesComponent } from './recipes/latest-recipes/latest-recipes.component';

@NgModule({
  declarations: [AppComponent,
    RecipeCreateComponent,
    IngredientListComponent,
    HeaderComponent,
    LatestRecipesComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
