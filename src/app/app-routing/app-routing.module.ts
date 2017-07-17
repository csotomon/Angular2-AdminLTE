import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: AdminComponent },
      { path: 'admin', component: AdminComponent },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
