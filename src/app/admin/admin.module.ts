import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminCustomDashboardComponent} from './admin-custom-dashboard/admin-custom-dashboard.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FormsModule } from '@angular/forms';

import { AuthGuard } from './_guards/guard';

// used to create fake backend
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AlertComponent } from '../_directives/index';
import { AlertService, AuthenticationService, UserService } from '../_services/index';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard1Component,
    AdminDashboard2Component,
    AdminCustomDashboardComponent,
    AdminLoginComponent,
    AlertComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    BaseRequestOptions
  ],
  exports: [AdminComponent],
  bootstrap: [ AdminComponent ]
})
export class AdminModule { }

platformBrowserDynamic().bootstrapModule(AdminModule);
