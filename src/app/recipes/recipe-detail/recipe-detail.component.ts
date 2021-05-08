import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    recipe: RecipeModel;
    private id: number;

    constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params) => {
                this.id = +params.id;
                this.recipe = this.recipeService.getRecipe(this.id);
            }
        );
    }

    onAddToShoppingList(): void {
        this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
    }

    editRecipe(): void {
        // this.router.navigate(['edit'], {relativeTo: this.route});
        this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }
}