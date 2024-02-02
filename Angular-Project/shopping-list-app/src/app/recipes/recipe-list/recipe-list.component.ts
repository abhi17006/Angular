import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  //array of Recipe type class
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', 'Recipe description', 'https://www.nehascookbook.com/wp-content/uploads/2022/11/Paneer-tikka-masala-WS.jpg'),
    new Recipe('A Test Recipe', 'Recipe description', 'https://www.nehascookbook.com/wp-content/uploads/2022/11/Paneer-tikka-masala-WS.jpg'
    )
  ];
  constructor(){

  }
  ngOnInit(){}
}
