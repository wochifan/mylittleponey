import { Component } from '@angular/core';
import { User } from './user';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyLittlePoney';
  identifiant: string;

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.identifiant = sessionStorage.getItem('user')

  }
  logout() {
    this.http.post('logout', {}).subscribe(() => {
        this.app.authenticated = false;
        this.router.navigateByUrl('/login');
    });
  }

}
