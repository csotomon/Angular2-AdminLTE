import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './starter.component';

const routes: Routes = [
  { path: 'index', component: StarterComponent },
  { path: '', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
