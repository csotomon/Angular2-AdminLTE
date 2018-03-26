import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterHeaderComponent } from './starter-header/starter-header.component';

@NgModule({
  imports: [
    CommonModule,
    StarterRoutingModule
  ],
  declarations: [StarterComponent, StarterHeaderComponent]
})
export class StarterModule { }
