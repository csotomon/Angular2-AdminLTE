import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestComponent } from './test/test.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: TestComponent },
      { path: 'admin', component: AdminComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}