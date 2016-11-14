import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  bodyClasses:string = "login-page";
  body = document.getElementsByTagName('body')[0];
  icheck: JQuery;

  constructor(private router:Router) { 
  }

  ngOnInit() {
    //Add the login-page class to the body
    //$('body').addClass(this.bodyClasses);
    this.body.classList.add(this.bodyClasses);   //add the class   

    this.icheck = jQuery("input").iCheck({
      checkboxClass: "icheckbox_square-blue",
      radioClass: "iradio_square-blue",
      increaseArea: "20%" // optional
    });

  }

  ngOnDestroy() {
    //remove the login-page class to the body
    //$('body').removeClass(this.bodyClasses);
    this.body.classList.remove(this.bodyClasses);
  }

  ngAfterViewInit() {
  }

  gotoAdmin(){
    this.router.navigate(['/admin']);
  }

}
