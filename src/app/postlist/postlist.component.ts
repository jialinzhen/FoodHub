import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../models/Post.model';
import {ForumbackendClientService} from '../services/forumbackend.client.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  Posts: Post[] = [];
  constructor(public ForumBackendService: ForumbackendClientService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    this.ForumBackendService.GetAllPost().then(posts => { this.Posts = posts; });
  }
  onEditPost(id) {
    this.router.navigate(['/posts' + '/' + id + '/edit']);
  }
  onDeletePost(index, post) {
    this.Posts.splice(index, 1);
    this.ForumBackendService.DeleteSinglePost(post);
  }
  onNavigateDetail(id) {
    this.router.navigate(['posts/' + id + '/comments']);
  }
}
