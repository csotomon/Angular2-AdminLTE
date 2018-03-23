import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import { } from 'icheck';
// declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  icheck: JQuery;


  constructor() {
  }

  ngOnInit() {
    const icheckOptions: ICheckOptions = {
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' /* optional */
    };
    this.icheck = jQuery('input').iCheck(icheckOptions);
  }

}
