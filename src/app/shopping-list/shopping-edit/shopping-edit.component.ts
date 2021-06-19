import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
} from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput")
  nameInputRef: ElementRef;

  @ViewChild("amountInput")
  amountInputRef: ElementRef;

  //emit a event
  @Output()
  IngredientAdded = new EventEmitter<Ingredient>();
  /*in case if i have a model
  ingredientAdded = new EventEmitter<{name: string, amount: number}>();
  */

  constructor() {}

  ngOnInit() {}

  onAddItem() {
    const ingtName= this.nameInputRef.nativeElement.value;
    const ingtAmount= this.amountInputRef.nativeElement.value;
    const newIngredient= new Ingredient(ingtName,ingtAmount);
    this.IngredientAdded.emit(newIngredient);
  }

  
}
