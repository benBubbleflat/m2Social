import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../posts/posts.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Post} from '../../posts/post';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  post: Post = new Post();

  id = null;

  paramObs: Subscription;
  success = false;
  constructor(private route: ActivatedRoute, private service: PostsService) { }

  ngOnInit() {
    this.paramObs = this.route.paramMap.switchMap(
        (params: ParamMap) => {
          this.id = +params.get('id');
          if (this.id !== null) {
            return this.service.getPost(this.id);
          }
        }
    ).subscribe(post => this.post = post);
  }

  submit() {
    this.success = true;
    if (this.id === null || this.id === 0) {
      this.post.id = Math.floor((Math.random() * 100) + 5);
      this.service.add(this.post);
      this.post = new Post();
    } else {
      this.service.update(this.id, this.post);
    }
    setTimeout(() => {
      this.success = false;
    }, 3000);
  }

}
