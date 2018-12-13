import {Component, OnInit, ViewChild} from '@angular/core';
import {FoodServiceClient} from '../../../Services/food.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  @ViewChild('RegisterForm') SignUpForm: NgForm;
  FormSubmit = {
    Email: '',
    Password: ''
  }
  constructor(public foodbackendService: FoodServiceClient) { }

  ngOnInit() {
  }
  onRegister() {
    this.FormSubmit.Email = this.SignUpForm.value.RegisterEmail;
    this.FormSubmit.Password = this.SignUpForm.value.RegisterPassword;
    console.log(this.FormSubmit);
    this.foodbackendService.RegisterUserUp(this.FormSubmit);
  }
}
