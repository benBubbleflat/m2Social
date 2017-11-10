import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRootComponent } from './admin-root/admin-root.component';
import {RouterModule, Routes} from "@angular/router";
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '', component: AdminRootComponent,
    children: [
      {path: 'edit/:id', component: AdminEditComponent},
      {path: 'edit', component: AdminEditComponent},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild(routes),
      FormsModule
  ],
  declarations: [ AdminEditComponent, AdminRootComponent]
})
export class AdminModule { }
