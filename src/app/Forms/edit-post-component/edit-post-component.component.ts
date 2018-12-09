import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ForumbackendClientService} from '../../services/forumbackend.client.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-post-component',
  templateUrl: './edit-post-component.component.html',
  styleUrls: ['./edit-post-component.component.css']
})
export class EditPostComponentComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              public forumbackendService: ForumbackendClientService) { }
  id: String;
  Post = {};
  @ViewChild('PostChangeForm') EditFormObject: NgForm;
  ngOnInit() {
    // this.id = this.route.params.value.postid;
    this.route.params.subscribe(params => {
      this.id = params['postid'];
    });
    this.forumbackendService.GetSinglePost(this.id).then(post => {
      this.Post = post;
      console.log(this.Post);
    });
  }
  onUpdate() {
    this.Post.Title = this.EditFormObject.value.EditPostTitle;
    this.Post.Content = this.EditFormObject.value.EditPostContent;
    this.Post.Image = this.EditFormObject.value.EditPostImage;
    this.Post.Category = this.EditFormObject.value.EditPostCategory;
    this.forumbackendService.UpdateSinglePost(this.Post);
  }
}
