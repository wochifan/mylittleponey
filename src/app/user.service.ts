import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: String = "http://localhost:8090/user";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type' : 'application/json'
    })
  };

  authenticated = false;

  constructor(private http: HttpClient) {

   }

   authenticate(credentials, callback) {
     const headers = new HttpHeaders(credentials ? {
       authorization: 'Basic' + btoa(credentials.loging + ':' + credentials.pass)
     } : {});
   

   this.http.get('user', {headers: headers}).subscribe(response => {
     if (response['name']) {
       this.authenticated = true;
     } else {
       this.authenticated = false;
     }
     return callback && callback();
   })
  }



}
