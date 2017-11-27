import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  url = '';
  data = '';
  active_state = false;

  constructor(private _http: Http, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    this.url = 'http://localhost/mediawiki/api.php?action=authcheck&format=json';
    this.check_auth(this.url);
    if (this.active_state === true) {
      return true;
    }
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }

  check_auth(check_url) {
    return this._http.get(check_url)
      .map(res => res.json())
      .subscribe(result => {
          this.data = JSON.parse(JSON.stringify(result['authcheck']));
          console.log(this.data);
          if (this.data === 'true') {
            this.active_state = true;
          } else {
            alert('Server Error');
          }
        },
        error => {
          return console.log(error);
        }
      );
  }
}
