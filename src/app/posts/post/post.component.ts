import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {PostsService} from '../posts.service';
import {Subscription} from 'rxjs';
import {CommentsService} from '../../comments/comments.service';
import {Commentary} from '../../comments/comment';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  paramObs: Subscription;
  comments: Commentary[];
  @Input() post: Post;
  constructor(private route: ActivatedRoute, private service: PostsService, private commentService: CommentsService) { }

  ngOnInit() {
    if ( !this.post ) {
      this.paramObs = this.route.paramMap.switchMap(
          (params: ParamMap) => {
            return this.service.getPost(+params.get('id'));
          }
      ).subscribe(post => {
        this.post = post;
        this.commentService.getCommentsFromPost(post.id).subscribe( comments => {
          this.comments = comments;
        });
      });
    }
  }

}
