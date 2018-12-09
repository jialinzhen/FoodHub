import { Component, OnInit } from '@angular/core';
import {ForumbackendClientService} from '../services/forumbackend.client.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  Post = {};
  id = null;
  constructor(public ForumBackendService: ForumbackendClientService,
              public route: ActivatedRoute,
              public router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['postid'];
      this.ForumBackendService.GetSinglePost(this.id).then(post => {
        console.log(post);
        this.Post = post;
      });
    });
  }
  NavigateCommentCreate() {
    this.router.navigate(['posts/' + this.id + '/comments/create']);
  }

}
