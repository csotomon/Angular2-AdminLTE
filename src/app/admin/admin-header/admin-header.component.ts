import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  url = '';
  data = '';
  redirectUrl = '/login';

  constructor(private _http: Http, private router: Router) { }

  ngOnInit() {
  }

  logout_admin() {
    // alert("called");
    this.url = 'http://localhost/mediawiki/api.php?action=logout&format=json';
    return this._http.get(this.url)
      .map(res => res.json())
      .subscribe(result => {
          console.log(result);
          alert(result);
          if (result !== undefined && result.length > 0) {
            this.data = JSON.parse(JSON.stringify(result['logout']));
          }
          // if (this.data !== 'true') {
          this.router.navigate([this.redirectUrl]);
          // }
        },
        error => {
          return console.log(error);
        }
        // () => console.log(JSON.parse(this.data))
      );
  }

}
