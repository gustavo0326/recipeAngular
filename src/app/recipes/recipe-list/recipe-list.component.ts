import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "Olivo a la verde",
      "circulo verde de olivo",
      "https://familynutrition.co.uk/wp-content/uploads/2014/06/Recipe-icon.png"
    ),
    new Recipe(
      "cupcake",
      "Sombrero de panaderia",
      "https://www.pngkit.com/png/full/52-526900_recipe-icon.png"
    ),
  ];

  constructor() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
    console.log("gus4 lista componente");
  }

  ngOnInit() {}
}
