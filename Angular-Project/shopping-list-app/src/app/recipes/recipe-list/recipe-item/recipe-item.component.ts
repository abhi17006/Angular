import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  //input decorator to bind property form outside
  @Input() recipe:Recipe;
  

  constructor(private recipeService: RecipeService){
  }

  onSelected(){
    //emit recipeService event
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
