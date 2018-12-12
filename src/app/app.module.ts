import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { CreateRecipeFormComponent } from './Forms/create-recipe-form/create-recipe-form.component';
import { CreateRecipeCommentFormComponent } from './Forms/create-recipe-comment-form/create-recipe-comment-form.component';
import { EditRecipeFormComponent } from './Forms/edit-recipe-form/edit-recipe-form.component';
import { EditRecipeCommentFormComponent } from './Forms/edit-recipe-comment-form/edit-recipe-comment-form.component';
import {FoodServiceClient} from './Services/food.service.client';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeDetailComponent,
    RecipelistComponent,
    CreateRecipeFormComponent,
    CreateRecipeCommentFormComponent,
    EditRecipeFormComponent,
    EditRecipeCommentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FoodServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
