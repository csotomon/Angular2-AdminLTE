import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminLoginService {

  constructor( private _http: Http ) {}

  getLogin(api_action, username, password) {
    return this._http.get('http://localhost/mediawiki/api.php?action=' + api_action + '&username=' + btoa(username) + '&password=' + btoa(password) + '&format=json')
      .map(res => res.json());
  }
}
