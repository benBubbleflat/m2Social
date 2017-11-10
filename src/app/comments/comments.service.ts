import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commentary} from "./comment";

@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) { }

  getCommentFromPost(idPost: number, id: number): Observable<Commentary> {
    return this.http.get(`/api/posts/${idPost}/comments/${id}`);
  }

  getCommentsFromPost(idPost: number): Observable<Commentary[]> {
    return this.http.get(`/api/posts/${idPost}/comments`);
  }

}
