import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardControlSidebarComponent } from './dashboard-control-sidebar/dashboard-control-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    DashboardContentComponent,
    DashboardFooterComponent,
    DashboardControlSidebarComponent
  ]
})
export class DashboardModule { }
