import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'This is test recipe',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'),
    new Recipe('Test Recipe 2', 'This is test recipe',
      'https://www.bbcgoodfood.com/sites/default' +
      '/files/recipe-collections/collection-image/2013/05/dinner-party-dessert-profiteroles.jpg'),
    new Recipe('Test Recipe 3', 'This is test recipe',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/' +
      '2016/06/matcha-mousse-cake.jpg?itok=8epMXuWz')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
