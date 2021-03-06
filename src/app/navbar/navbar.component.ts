import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FoodServiceClient} from '../Services/food.service.client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public foodbackendService: FoodServiceClient) { }

  ngOnInit() {
  }
  GoToAllRecipe() {
    this.router.navigate(['foods/create']);
  }
  GoToRegister() {
    this.router.navigate(['Register']);
  }
  GoToLogIn() {
    this.router.navigate(['LogIn']);
  }
  LogUserOut() {
   this.foodbackendService.LoggingUserOut();
  }
}
