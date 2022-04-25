import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestRecipesComponent } from './recipes/latest-recipes/latest-recipes.component';
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create.component';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';

const routes: Routes = [
  { path: '', component: LatestRecipesComponent },
  { path: 'publish', component: RecipeCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
