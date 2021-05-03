import {EventEmitter, Injectable} from '@angular/core';

import {RecipeModel} from './recipe.model';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<RecipeModel>();

    private recipes: RecipeModel[] = [
        new RecipeModel(
            'Test Recipe 1',
            'Description of Test Recipe 1',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
            [
                new IngredientModel('test', 1),
                new IngredientModel('test', 2)
            ]
        ),
        new RecipeModel(
            'Test Recipe 2',
            'Description of Test Recipe 2',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
            [
                new IngredientModel('test', 3)
            ]
        )
    ];

    constructor(private slService: ShoppingListService) {
    }

    getRecipes(): RecipeModel[] {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: IngredientModel[]): void {
        this.slService.addIngredients(ingredients);
    }
}
