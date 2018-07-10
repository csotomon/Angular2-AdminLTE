import { ThemeRoutingModule } from './theme-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';
import { ThemeNavbarComponent } from './theme-navbar/theme-navbar.component';
import { ThemeMainSidebarComponent } from './theme-main-sidebar/theme-main-sidebar.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { ThemeFooterComponent } from './theme-footer/theme-footer.component';
import { ThemeControlSidebarComponent } from './theme-control-sidebar/theme-control-sidebar.component';
import { ThemeDashboardv1Component } from './theme-dashboardv1/theme-dashboardv1.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule
  ],
  declarations: [ThemeComponent, ThemeNavbarComponent, ThemeMainSidebarComponent, ThemeContentComponent, ThemeFooterComponent, ThemeControlSidebarComponent, ThemeDashboardv1Component]
})
export class ThemeModule { }
