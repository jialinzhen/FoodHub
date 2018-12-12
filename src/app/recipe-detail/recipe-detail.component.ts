import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FoodServiceClient} from '../Services/food.service.client';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: string;
  RecipeDetail = {};
  constructor(private route: ActivatedRoute,
              public foodbackendService: FoodServiceClient,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.foodbackendService.GetOneRecipe(this.id).then(recipe => {
      this.RecipeDetail = recipe;
      console.log(this.RecipeDetail);
    });
  }
  NavigateToCommentCreate() {
    this.router.navigate(['/foods/' + this.id + '/createComment']);
  }
}
