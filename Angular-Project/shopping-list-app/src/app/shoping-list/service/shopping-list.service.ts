import { EventEmitter } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";

export class ShoppingListService{
    
    //new Event EMitter
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    
    //array
    private ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tometoes', 15),
        new Ingredient('Banana', 2.5)
      ];

    getIngredients(){
        //copy of current array
        return this.ingredients.slice();
    }

    addIngredient(ingdnt: Ingredient){
        this.ingredients.push(ingdnt);
        //infor to the compoent that data has changed
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
    //call into recipe Service to add Ingredients
    addIngredients(currIngredients: Ingredient[]){
        //convert array of elements into list using (...)Spread operator
        this.ingredients.push(...currIngredients);
        //using event emiiter to update change and send new copy of array
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}