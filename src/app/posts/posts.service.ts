import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPost(id: number): Observable<Post> {
    return this.http.get(`/api/posts/${id}`);
  }

  getAll(): Observable<Post[]> {
    return this.http.get('/api/posts');
  }
}
