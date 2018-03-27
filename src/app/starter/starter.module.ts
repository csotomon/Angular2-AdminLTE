import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterHeaderComponent } from './starter-header/starter-header.component';
import { StarterSidebarComponent } from './starter-sidebar/starter-sidebar.component';
import { StarterContentComponent } from './starter-content/starter-content.component';
import { StarterFooterComponent } from './starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter-control-sidebar/starter-control-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    StarterRoutingModule
  ],
  declarations: [StarterComponent, StarterHeaderComponent, StarterSidebarComponent, StarterContentComponent, StarterFooterComponent, StarterControlSidebarComponent]
})
export class StarterModule { }
