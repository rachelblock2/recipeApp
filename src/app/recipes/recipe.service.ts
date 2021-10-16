import { EventEmitter, Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Chicken Tacos', 'The best dinner ever', '../../../assets/images/chicken_fajitas.jpg', 
        [
            new Ingredient('Chicken', 1),
            new Ingredient('Peppers', 3),
            new Ingredient('Onion', 1),
            new Ingredient('Green onion', 1)
        ]),
        new Recipe('Lasagna', 'Christmas Eve dinner!', '../../../assets/images/lasagna.jpg', 
        [
            new Ingredient('Noodles box', 1),
            new Ingredient('Sauce jar', 1),
            new Ingredient('Cheese in cups', 2),
            new Ingredient('Meat in cups', 2)
        ])
      ];

    constructor(private slService: ShoppingListService) {}
    
    getRecipes() {
        return this.recipes.slice(); //only a copy
    }

    addIngredientstoShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}