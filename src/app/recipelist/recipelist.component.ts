import { Component, OnInit } from '@angular/core';
import {FoodServiceClient} from '../Services/food.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  RecipeList = [];
  constructor(public foodbackendService: FoodServiceClient,
              private router: Router) { }

  ngOnInit() {
    this.foodbackendService.GetAllRecipe().then(recipes => {
      this.RecipeList = recipes;
      console.log(this.RecipeList);
    });
  }
  onrecipeEdit(id) {
    this.router.navigate(['foods/' + id + '/edit']);
  }
  onDelete(index, id) {
    this.RecipeList.splice(index, 1);
    this.foodbackendService.DeleteOneRecipe(id);
  }
  NavigateToDetail(id) {
    this.router.navigate(['/foods/' + id]);
  }
  onSave(id) {
    this.foodbackendService.saveRecipeToUser(id);
  }
}
