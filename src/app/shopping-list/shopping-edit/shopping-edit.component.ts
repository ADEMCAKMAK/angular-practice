import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();
  constructor() { }

  ngOnInit(): void {
  }

    onAddItem() {
        const name = this.nameInputRef.nativeElement.value;
        const amount = this.amountInputRef.nativeElement.value;
        this.ingredientAdded.emit(new IngredientModel(name, amount));
    }
}
