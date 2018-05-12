import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdministratorComponent } from './administrator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AdministratorRoutingModule
  ],
  declarations: [
    AdministratorComponent
  ]
})
export class AdministratorModule { }
