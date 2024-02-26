import { Component,OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {

  //array of Recipe type class
  recipes: Recipe[] ;

  constructor(private recipeService: RecipeService){

  }
  ngOnInit(){
    //access recipe array using Service class
    this.recipes = this.recipeService.getRecipes();
  }

}
