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

  add(livre: Post): void {
    this.http.post<Post>('/api/posts', livre).subscribe();
  }

  update(id: number, livre: Post): void {
    this.http.put(`/api/posts/${id}`, livre).subscribe();
  }
}
