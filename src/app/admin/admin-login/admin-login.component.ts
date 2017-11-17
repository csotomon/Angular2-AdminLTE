import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../../_services/index';

// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  result = false;

  // username = this.model.username;
  // password = this.model.password;
  username = "govind";
  password = "govind";
  token = "";
  data = {};
  api_action = "auth";
  url = "http://localhost/mediawiki/api.php?action="+this.api_action+"&format=json";

  constructor(private _http: Http, private router: Router) { }

  ngOnInit() {
     // Actualiza la barra latera y el footer
    // AdminLTE.init();
  }
  
  login_admin() {
    //   alert("function Called")
      this.loading = true;
      this.data = {username: this.username, password: this.password}
      console.log(this.data);
      console.log(this.url);
      let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
      let options ={ headers: headers };
      return this._http.post(this.url, this.data, options)
      .map((response: Response) => {
          console.log(response);
          alert("Success");          
      })
      .subscribe(result => {
        console.log(result);
    });

  }
  
}
