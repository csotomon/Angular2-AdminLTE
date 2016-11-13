import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  bodyClasses:string = "skin-blue sidebar-mini";
  body = document.getElementsByTagName('body')[0];
  
  constructor() { }

  ngOnInit() {
    //add the the body classes
    this.body.classList.add(this.bodyClasses);
  }

   ngOnDestroy() {
    //remove the the body classes
    this.body.classList.remove(this.bodyClasses);
  }

}
