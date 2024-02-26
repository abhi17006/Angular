import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../../shoping-list/service/shopping-list.service";

@Injectable()
export class RecipeService{
    //EventEmitter for the Recipe Service, too acess emit cross-communication component
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Paneer Tikka', 'A deleicious -tasty- paneer tikka Recipe ',
           'https://www.nehascookbook.com/wp-content/uploads/2022/11/Paneer-tikka-masala-WS.jpg',
           [
            new Ingredient('Fresh Panner', 5),
            new Ingredient('Tomatoes', 2),
            new Ingredient('Paneer Tikka Spice', 4)
           ]),
        new Recipe('Paneer Kathai', 'A deleicious -tasty- Panner Kathai Recipe ', 
        'https://www.nehascookbook.com/wp-content/uploads/2022/11/Paneer-tikka-masala-WS.jpg',
        [ new Ingredient('Fresh Panner', 5),
        new Ingredient('Tomatoes', 2),
        new Ingredient('Green Peeper', 1),
        new Ingredient('Onions', 3),
        new Ingredient('Paneer Spice', 4)])
      ];

    constructor(private shopListService: ShoppingListService){}
    getRecipes(){
        //return copy of new array
        return this.recipes.slice();
    }

    addIngredientsToShopList(ingredients: Ingredient[]){
      //access shopping List service to add Ingredients from recipe-Details Page
      this.shopListService.addIngredients(ingredients);
    }
}