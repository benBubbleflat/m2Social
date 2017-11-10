import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {PostsModule} from './posts/posts.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  }
];
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
      PostsModule,
      RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
