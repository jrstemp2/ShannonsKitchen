import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../interfaces/recipe';

@Injectable()
export class RecipeService {
  constructor(private http: HttpClient) { }

  //add recipe

  //get recipes all
  getAllRecipes() {
    return this.http.get<Recipe[]>('/api/recipe');
  }
  //get recipe by id
  getRecipeByID(id: number) {
    return this.http.get<Recipe>(`/api/recipe/${id}`);
  }
  //delete recipe
  deleteRecipeByID(id: number) {
    return this.http.delete<Recipe>(`/api/recipe/${id}`);
  }

  addRecipe(recipe: Recipe) {
    return this.http.post('/api/recipe', recipe);
  }

}
