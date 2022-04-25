import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientListComponent } from './recipes/ingredients-input-list/ingredient-list.component';
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create.component';
import { HeaderComponent } from './header/header.component';
import { LatestRecipesComponent } from './recipes/latest-recipes/latest-recipes.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { LoginComponent } from './users/login/login.component';
import { SingleRecipeComponent } from './recipes/single-recipe/single-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCreateComponent,
    IngredientListComponent,
    HeaderComponent,
    LatestRecipesComponent,
    RegistrationComponent,
    LoginComponent,
    SingleRecipeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
