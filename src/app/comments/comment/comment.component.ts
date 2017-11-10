import {Component, Input, OnInit} from '@angular/core';
import {Commentary} from "../comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: Commentary;
  constructor() { }

  ngOnInit() {
  }

}
