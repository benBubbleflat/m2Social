import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsRootComponent } from './posts-root.component';

describe('PostsRootComponent', () => {
  let component: PostsRootComponent;
  let fixture: ComponentFixture<PostsRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
