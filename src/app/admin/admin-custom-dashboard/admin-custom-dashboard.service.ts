import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminCustomDashboardService {

  constructor( private http: Http ) {}

  getValues() {
    return this.http.get('http://localhost/mediawiki/api.php?action=query&list=userdata&format=json')
      .map(res => res.json());
  }
}
