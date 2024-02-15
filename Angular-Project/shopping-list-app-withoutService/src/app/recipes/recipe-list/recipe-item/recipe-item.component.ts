import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  //input decorator to bind property form outside
  @Input() recipe:Recipe;
  //listen event from the outside parent RecipeList component
  @Output() recipeSelected =  new EventEmitter<void>();

  constructor(){
  }

  onSelected(){
    this.recipeSelected.emit();
  }
}
