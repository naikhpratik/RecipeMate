import { Component, OnInit  } from '@angular/core';

import { Recipe } from '../recipe'
import { RecipeService }  from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  //@Output()  recipeSelected = new EventEmitter();
  //recipe = new Recipe('Dummy','Dummy in the recipe','https://images.halloweencostumes.com/products/15225/1-1/crash-test-dummy-second-skin-suit.jpg',[])
  constructor(private recipeService: RecipeService){}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => this.recipes = recipes 
    );
  }

}
