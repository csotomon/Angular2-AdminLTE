import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterNavbarComponent } from './starter-navbar/starter-navbar.component';
import { StarterMainSidebarComponent } from './starter-main-sidebar/starter-main-sidebar.component';
import { StarterContentComponent } from './starter-content/starter-content.component';
import { StarterControlSidebarComponent } from './starter-control-sidebar/starter-control-sidebar.component';
import { StarterFooterComponent } from './starter-footer/starter-footer.component';

@NgModule({
  imports: [
    CommonModule,
    StarterRoutingModule
  ],
  declarations: [
    StarterComponent,
    StarterNavbarComponent,
    StarterMainSidebarComponent,
    StarterContentComponent,
    StarterControlSidebarComponent,
    StarterFooterComponent,
  ]
})
export class StarterModule { }
