import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestComponent } from './test/test.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'admin', component: AdminComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}