import { Injectable } from '@angular/core';
import { Pony } from './pony';
import { PONIES } from './ponies-mock';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PonyService {
  url: String= "http://localhost:8090/pony"
  ponies: Array<Pony>;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type' : 'application/json'
    })
  };

  constructor(private http: HttpClient, private router:Router) {

   }
   getAllPonies(): Observable<Array<Pony>> {
     return this.http.get<Array<Pony>>(this.url + '/', this.httpOptions);
   }
   addPony(pony:Pony): void {
     this.http.post(this.url + '/create', pony, this.httpOptions).subscribe(() => this.router.navigate(['/Ponies']));
  ;
   }
   getPony(id: number): Observable<Pony> {
     return this.http.get<Pony>(this.url + '/' + id, this.httpOptions)
   }
}
