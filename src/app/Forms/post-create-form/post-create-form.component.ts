import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ForumbackendClientService} from '../../services/forumbackend.client.service';

@Component({
  selector: 'app-post-create-form',
  templateUrl: './post-create-form.component.html',
  styleUrls: ['./post-create-form.component.css']
})
export class PostCreateFormComponent implements OnInit {

  @ViewChild('PostEditForm') PostEditForm: NgForm;
  newPost = {
    Title: '',
    Content: '',
    Image: '',
    Category: '',
  }
  constructor(public ForumBackendService: ForumbackendClientService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.newPost.Title = this.PostEditForm.value.PostTitle;
    this.newPost.Content = this.PostEditForm.value.PostContent;
    this.newPost.Image = this.PostEditForm.value.PostImageLink;
    this.newPost.Category = this.PostEditForm.value.PostCategory;
    this.ForumBackendService.AddOnePost(this.newPost).then(res => console.log(res));
  }

}
