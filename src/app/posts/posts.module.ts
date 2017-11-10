import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {PostsService} from './posts.service';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsRootComponent } from './posts-root/posts-root.component';
import { PostComponent } from './post/post.component';

import {CommentComponent} from '../comments/comment/comment.component';
import {CommentsService} from '../comments/comments.service';



const routes: Routes = [
  {
    path: 'posts', component: PostsRootComponent,
    children: [
      {path: ':id', component: PostComponent},
      {path: '', component: PostsListComponent},

    ],
  },

];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
    CommonModule, HttpClientModule,
  ],
  declarations: [PostsListComponent, PostsRootComponent, PostComponent, CommentComponent],
  exports: [ PostsRootComponent, CommentComponent],
  providers: [PostsService, CommentsService]
})
export class PostsModule { }
