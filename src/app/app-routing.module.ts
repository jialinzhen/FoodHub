import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostCreateFormComponent} from './Forms/post-create-form/post-create-form.component';
import {PostlistComponent} from './postlist/postlist.component';
import {EditPostComponentComponent} from './Forms/edit-post-component/edit-post-component.component';
import {SinglePostComponent} from './single-post/single-post.component';
import {CommentsCreateComponent} from './Forms/comments-create/comments-create.component';
import {CommentsEditComponent} from './Forms/comments-edit/comments-edit.component';


const routes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'create', component: PostCreateFormComponent},
  {path: 'posts', component: PostlistComponent, pathMatch: 'full'},
  {path: 'posts/:postid/edit', component: EditPostComponentComponent},
  {path: 'posts/:postid/comments', component: SinglePostComponent},
  {path: 'posts/:postid/comments/create', component: CommentsCreateComponent},
  {path: 'posts/:postid/comments/:commentid/edit', component: CommentsEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
