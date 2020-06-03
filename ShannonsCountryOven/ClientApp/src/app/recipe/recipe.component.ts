import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../interfaces/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})
/** recipe component*/
export class RecipeComponent {
    /** recipe ctor */
  constructor(private recipeData: RecipeService) { }
  @Output() updateEmitter = new EventEmitter<Recipe>();

  recipes: Recipe[];

  ngOnInit() {
    this.loadPage();
  }

  loadPage() {
    this.recipeData.getAllRecipes().subscribe(
      (data: Recipe[]) => {
        this.recipes = data;
      },
      error => console.error(error)
    );
  }

  deleteRecipe(id:number) {
    this.recipeData.deleteRecipeByID(id).subscribe(
      (data: any) => {
        console.log(data);
        this.loadPage();
      },
      error => console.error(error)
    );
  }

}
