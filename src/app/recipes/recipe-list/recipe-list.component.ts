import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output()  recipeSelected = new EventEmitter();
  recipe = new Recipe('Dummy','Dummy in the recipe','https://images.halloweencostumes.com/products/15225/1-1/crash-test-dummy-second-skin-suit.jpg')
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe );
  }

}
