import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('testing', 'Testing', '../../../assets/images/test.jpg'),
        new Recipe('Another Test Recipe', 'Testing', '')
      ];

    getRecipes() {
        return this.recipes.slice(); //only a copy
    }
}