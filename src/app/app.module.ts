import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostCreateFormComponent } from './Forms/post-create-form/post-create-form.component';
import {ForumbackendClientService} from './services/forumbackend.client.service';
import { EditPostComponentComponent } from './Forms/edit-post-component/edit-post-component.component';
import { AnswersComponent } from './single-post/answers/answers.component';
import { CommentsCreateComponent } from './Forms/comments-create/comments-create.component';
import { CommentsEditComponent } from './Forms/comments-edit/comments-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SinglePostComponent,
    PostlistComponent,
    PostCreateFormComponent,
    EditPostComponentComponent,
    AnswersComponent,
    CommentsCreateComponent,
    CommentsEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ForumbackendClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
