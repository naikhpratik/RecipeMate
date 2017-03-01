import { Injectable } from '@angular/core';
import { Recipe } from "./recipe"
import { Ingredient } from  "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Greek Salad','Amazing taste','http://assets.epicurious.com/photos/576454fb42e4a5ed66d1df6b/master/pass/greek-salad.jpg',[
      new Ingredient('Green beans',2),
      new Ingredient('Lettuce',5)
    ]),
    new Recipe('Italian Salad','Amazing Red Wine Dressing','http://a3559z1.americdn.com/wp-content/uploads/2014/10/Healthy-Italian-Salad-Recipes-3.jpg',[
      new Ingredient('Cabbage',2),
      new Ingredient('tomato',3)
    ])
  ];
  constructor(){}

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }
}
