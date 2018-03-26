import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { } from 'jquery';
import { } from 'admin-lte';


@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit, OnDestroy, AfterViewInit {

  body: HTMLBodyElement = document.getElementsByTagName('body')[0];
  adminLte: JQuery;

  constructor() { }

  ngAfterViewInit(): void {
    const layoutOptions: LayoutOptions = {
      slimscroll: false,
      resetHeight: false
    };
    // Call the AdminLTE layout compoment
    this.adminLte = jQuery('body').layout(layoutOptions);
    this.adminLte.layout('activate');
  }

  ngOnInit() {
    // add the the body classes
    /*
    BODY TAG OPTIONS:
    =================
    Apply one or more of the following classes to get the
    desired effect
    |---------------------------------------------------------|
    | SKINS         | skin-blue                               |
    |               | skin-black                              |
    |               | skin-purple                             |
    |               | skin-yellow                             |
    |               | skin-red                                |
    |               | skin-green                              |
    |---------------------------------------------------------|
    |LAYOUT OPTIONS | fixed                                   |
    |               | layout-boxed                            |
    |               | layout-top-nav                          |
    |               | sidebar-collapse                        |
    |               | sidebar-mini                            |
    |---------------------------------------------------------|
    */
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');

    // Update the AdminLTE layouts
    // AdminLTE.init("init");
  }

  ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }

}
