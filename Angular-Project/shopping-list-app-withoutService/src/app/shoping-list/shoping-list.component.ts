import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrl: './shoping-list.component.css'
})
export class ShopingListComponent implements OnInit{

  ingredients : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tometoes', 15),
    new Ingredient('Banana', 2.5)
  ];
  constructor(){

  }
  ngOnInit(){
  }
  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
