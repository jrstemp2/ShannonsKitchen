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

  showFoodImage: string = "";
  errorMessage: string = "";
  newRecipe: Recipe;


  newTitle: string = "";
  newIngredients: string = "";
  newCookingInstructions: string = "";
  newCategory: string = "";
  newTotalPoints: number;
  newServingPoints: number;
  newServingSize: string;
  newFoodImage: string = "";
  

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

  addRecipe() {
    if (this.showFoodImage !== 'Yes') {
      this.newFoodImage = 'assets/Images/no-food-image.png';
    }
    this.recipeData.addRecipe(
      {
        id: 0,
        title: this.newTitle,
        ingredients: this.newIngredients,
        cookingInstructions: this.newCookingInstructions,
        servingSize: this.newServingSize,
        servingPoints: this.newServingPoints,
        totalPoints: this.newTotalPoints,
        category: this.newCategory,
        foodImage: this.newFoodImage
      } as Recipe).subscribe(data => {
        this.loadPage();
      },
      error => console.error(error)
      );
  }

}
