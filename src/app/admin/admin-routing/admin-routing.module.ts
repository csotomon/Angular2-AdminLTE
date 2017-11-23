import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminCustomDashboardComponent} from './../admin-custom-dashboard/admin-custom-dashboard.component';
import { AdminLoginComponent } from './../admin-login/admin-login.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './../_guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: AdminLoginComponent },
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'custom-dashboard',
            pathMatch: 'full'
          },
          {
            path: 'dashboard1',
            component: AdminDashboard1Component
          },
          {
            path: 'dashboard2',
            component: AdminDashboard2Component
          },
          {
            path: 'custom-dashboard',
            component: AdminCustomDashboardComponent
          }
        ],
        canActivate: [AuthGuard]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

// export const routing = RouterModule.forRoot(appRoutes);
export class AdminRoutingModule { }
