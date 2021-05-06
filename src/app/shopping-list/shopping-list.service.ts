import { EventEmitter } from '@angular/core';

import {IngredientModel} from '../shared/ingredient.model';

export class ShoppingListService {

    changed = new EventEmitter<IngredientModel[]>();

    private ingredients: IngredientModel[] = [
        new IngredientModel('domatis', 5),
        new IngredientModel('portakal', 7)
    ];

    getIngredients(): IngredientModel[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: IngredientModel): void {
        this.ingredients.push(ingredient);
        this.changed.emit(this.getIngredients());
    }

    addIngredients(ingredients: IngredientModel[]): void {
        this.ingredients.push(...ingredients);
        this.changed.emit(this.getIngredients());
    }
}
