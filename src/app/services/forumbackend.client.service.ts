import {Injectable} from '@angular/core';

@Injectable()
export class ForumbackendClientService {
  local = 'http://localhost:3002/api/';
  AddOnePost = post => fetch(this.local + 'addpost', {
    body: JSON.stringify(post),
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    }
  })
   GetAllPost = () => fetch(this.local + 'getposts').then(response => response.json());
   GetSinglePost = (id) => fetch(this.local + 'posts/' + id).then(response => response.json());
   DeleteSinglePost = post => fetch(this.local + 'posts/' + post._id, {
    method: 'DELETE',
    headers: {
      'content-type' : 'application/json'
    }
  })
  UpdateSinglePost = post => fetch(this.local + 'posts/' + post._id, {
    body: JSON.stringify(post),
    method: 'PUT',
    headers: {
      'content-type' : 'application/json'
    }
  })
  CreateCommentForPost = (comment, id) => fetch(this.local + 'posts/' +  id + '/comments', {
    body: JSON.stringify(comment),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
}
