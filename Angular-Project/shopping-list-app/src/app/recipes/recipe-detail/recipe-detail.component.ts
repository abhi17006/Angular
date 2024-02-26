import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {

  @Input() recipe: Recipe;

  //inject RecipeService to access ingredients
  constructor(private recipeService: RecipeService){  }

  onAddtoShoppingList(){
    //add recipe Model class Ingredients[] elements 
    this.recipeService.addIngredientsToShopList(this.recipe.ingredients);
  }
}
