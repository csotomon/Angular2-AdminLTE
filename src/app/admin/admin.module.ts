import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MainSideComponent } from './main-side/main-side.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminComponent, MainSideComponent],
  exports: [AdminComponent]
})
export class AdminModule { }
