import { Component, Input } from '@angular/core';
import { Recipe } from '../interfaces/recipe';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-recipedetails',
    templateUrl: './recipedetails.component.html',
    styleUrls: ['./recipedetails.component.scss']
})
/** recipedetails component*/
export class RecipedetailsComponent {
    /** recipedetails ctor */
  constructor(private recipeData: RecipeService, private route: ActivatedRoute) { }
  @Input() ref: string;

  recipe: Recipe = {
    id: 0,
    title: '',
    ingredients: '',
    cookingInstructions: '',
    servingSize: '',
    servingPoints: 0,
    totalPoints: 0,
    category: '',
    foodImage: '',
  };

  recipeID: number;

  ngOnInit() {
    this.loadPage();
  }


  loadPage() {
    this.route.params.subscribe(params => {
      this.recipeID = +params['id'];
      this.recipeData.getRecipeByID(this.recipeID).subscribe(
        (data: Recipe) => this.recipe = { ...data },
        error => console.error(error)
      );
    })
  }

  


}
