import { Component, OnInit, OnDestroy } from '@angular/core';
import { } from 'jquery';
import { } from 'icheck';
import { Router } from '@angular/router';
// declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  icheck: JQuery;
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(private router: Router) {
  }

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('hold-transition');
    this.body.classList.add('login-page');

    // call iCheck
    const icheckOptions: ICheckOptions = {
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%'
    };
    this.icheck = jQuery('input').iCheck(icheckOptions);
  }

  ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('hold-transition');
    this.body.classList.remove('login-page');
  }

  sigIn() {
    this.router.navigate(['/starter']);
  }

}
