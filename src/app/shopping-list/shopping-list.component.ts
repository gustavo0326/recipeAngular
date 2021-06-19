import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[]= [];

  

  constructor() { }

  onIngredientAdded (ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.setLocalStorages('listaIngredientes',this.ingredients);
  }

  ngOnInit() {
    this.ingredients = this.getLocalStorage('listaIngredientes');
  }
  setLocalStorages (name: string, array:any){
    localStorage.setItem(name, JSON.stringify(array));

  }
  getLocalStorage(name: string){
    let a=[]; 
    return a = JSON.parse(localStorage.getItem(name));
    
  }

}
