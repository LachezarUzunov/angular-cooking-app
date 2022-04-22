import { Component } from "@angular/core";

@Component({
  selector: 'app-latest-recipes',
  templateUrl: './latest-recipes.component.html',
  styleUrls: ['./latest-recipes.component.css']
})
export class LatestRecipesComponent {
  //recipes = [];
  recipes = [{
    title: 'Perfect Soupe', exceprt: 'lLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque provident distinctio a repudiandae reprehenderit rem officia vero. Eius, quisquam. Incidunt sit sunt earum id, laudantium magni voluptatibus cupiditate. Deserunt culpa assumenda nesciunt odio eos ad voluptate reiciendis? Laboriosam quidem doloribus ea cupiditate qui quaerat aliquid odio pariatur nulla saepe.',
  }, {title: 'Perfect Soupe', exceprt: 'lLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque provident distinctio a repudiandae reprehenderit rem officia vero. Eius, quisquam. Incidunt sit sunt earum id, laudantium magni voluptatibus cupiditate. Deserunt culpa assumenda nesciunt odio eos ad voluptate reiciendis? Laboriosam quidem doloribus ea cupiditate qui quaerat aliquid odio pariatur nulla saepe.',
}];

}
