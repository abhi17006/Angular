import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  //varible type of recipe
  selectedRecipe : Recipe;

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) =>{
        this.selectedRecipe = recipe;
      }
    );
  }
}
