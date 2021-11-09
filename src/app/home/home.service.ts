import { Injectable } from '@angular/core';
import { Recipe } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 private recipes: Recipe[] = [
{
  id: 'r1',
  title: 'Amala',
  imageUrl:

  'https://www.chefspencil.com/wp-content/uploads/Amala-and-Ewedu-Soup-1.jpg',
   ingredients: ['Ewedu', 'tomatoes', 'pepper', ' meat', 'Gbegiri', 'Lafu', 'fish']
},
{
  id: 'r2',
  title: 'Spagetti',
  imageUrl:
  'https://media.istockphoto.com/photos/traditional-pasta-spaghetti-bolognese-in-white-plate-on-wooden-table-picture-id1087833940?k=20&m=1087833940&s=612x612&w=0&h=n45PM8k-Q0zfxnmrPbxNMOvIskibN_fdFxNFkGERRMQ=',
   ingredients: ['Spagetti', ' meat', 'tomatoes', 'pepper'],
}
];

  constructor() { }

getAllRecipes() {
  return [...this.recipes];
}


getRecipe(recipeId: string){

  return  {
    ...this.recipes.find(recipe => {
    return recipe.id === recipeId;  })
};
}

deleteRecipe(recipeId: string) {
  this.recipes = this.recipes.filter(recipe => {
    return recipe.id !== recipeId;
  });
}
}
