import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Post[];

  constructor(private service: PostsService ) { }

  ngOnInit() {
    this.service.getAll().subscribe(posts =>
      this.posts = posts
    );
  }

}
