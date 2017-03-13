import { Injectable, EventEmitter  } from '@angular/core';
import { Recipe } from "./recipe"
import { Ingredient } from  "../shared/ingredient";
import { Headers, Http, Response } from  "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe []>();
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
  constructor(private http: Http){}

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe :Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)]= newRecipe;
  }


  deleteRecipe(recipe :Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1)
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
        });
    return this.http.put('https://recipemate-faf00.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData(){
    return this.http.get('https://recipemate-faf00.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );

  }
}
