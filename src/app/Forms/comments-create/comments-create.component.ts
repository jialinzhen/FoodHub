import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ForumbackendClientService} from '../../services/forumbackend.client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments-create',
  templateUrl: './comments-create.component.html',
  styleUrls: ['./comments-create.component.css']
})
export class CommentsCreateComponent implements OnInit {
  @ViewChild('CommentCreateForm') commentFormObject: NgForm;
  id = null;
  CommentObject = {
    User: '',
    Content: '',
  };
  constructor(public forumbackendService: ForumbackendClientService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['postid'];
    });
  }
  onSubmit() {
    this.CommentObject.User = '5c0ae857e237de0e8d83ce43';
    this.CommentObject.Content = this.commentFormObject.value.CommentContent;
    this.forumbackendService.CreateCommentForPost(this.CommentObject, this.id);
  }
}
