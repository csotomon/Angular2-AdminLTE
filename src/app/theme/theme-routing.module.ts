import { ThemeComponent } from './theme.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeDashboardv1Component } from './theme-dashboardv1/theme-dashboardv1.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeComponent,
    children: [
      { path: '', component: ThemeDashboardv1Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
