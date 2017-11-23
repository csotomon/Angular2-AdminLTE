import { Directive, Component, OnInit, Input} from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../../_services/index';
import { error } from 'selenium-webdriver';

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
  error_data = '';
  result = false;
  invalid_data = false;

  username = '';
  password = '';
  token = '';
  data = '';
  login_error = '';
  api_action = 'auth';
  url = 'http://localhost/mediawiki/api.php?action=' + this.api_action;
  redirectUrl = '/admin';

  constructor(private _http: Http, private router: Router) { }

  ngOnInit() {
    // Actualiza la barra latera y el footer
    // AdminLTE.init();
  }

  login_admin() {
    //   alert('function Called')
    this.loading = true;
    this.invalid_data = false;
    this.data = JSON.stringify({});
    this.url = this.url + '&username=' + btoa(this.model.username) + '&password=' + btoa(this.model.password) + '&format=json';
    const headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    const options = { headers: headers };
    return this._http.get(this.url)
      .map(res => res.json())
      .subscribe(result => {
          this.data = JSON.parse(JSON.stringify(result['auth']));
          console.log(this.data);
          if (this.data['u_authenticate'] === 1) {
            localStorage.setItem('currentUser', this.data['u_authenticate']);
            this.router.navigate([this.redirectUrl]);
            this.redirectUrl = null;
          } else {
            this.loading = false;
            this.login_error = 'Invalid Username / Password.';
            this.invalid_data = true;
            return false;
          }
        },
        error => {
          this.loading = false;
          this.login_error = 'Server Error.';
          this.invalid_data = true;
          // console.log(error);
          return false;
        }
        // () => console.log(JSON.parse(this.data))
      );
  }
}
