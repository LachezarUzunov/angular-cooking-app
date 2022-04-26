import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestRecipesComponent } from './recipes/latest-recipes/latest-recipes.component';
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create.component';
import { SingleRecipeComponent } from './recipes/single-recipe/single-recipe.component';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';

const routes: Routes = [
  { path: '', component: LatestRecipesComponent },
  { path: 'publish', component: RecipeCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'details/:recipeId', component: SingleRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
