import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [];

  constructor() {
    this.ingredients.push(new IngredientModel('domatis', 5));
    this.ingredients.push(new IngredientModel('portakal', 7));
  }

  ngOnInit(): void {
  }

}
