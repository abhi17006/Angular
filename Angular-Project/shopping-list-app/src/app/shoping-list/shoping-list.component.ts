import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './service/shopping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrl: './shoping-list.component.css'
})
export class ShopingListComponent implements OnInit{

  ingredients : Ingredient[];
  constructor(private shoppingListService: ShoppingListService){

  }
  ngOnInit(){
    //pass ingretients from the service class
    this.ingredients = this.shoppingListService.getIngredients();
    //subscibe event data using service
    this.shoppingListService.ingredientsChanged.subscribe(
      (currIngredients: Ingredient[]) =>{
        this.ingredients = currIngredients;
      }
    );
  }
  

}
