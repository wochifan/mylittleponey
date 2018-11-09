import { Injectable } from '@angular/core';
import { Race } from './race';
import { RACES } from './races-mock';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  url: String = "http://localhost:8090/race";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type' : 'application/json'
    })
  };

  constructor(private http:HttpClient, private router:Router) {
  }
  
  getAllRaces(): Observable<Array<Race>> {
    return this.http.get<Array<Race>>(this.url + "/", this.httpOptions);
  }
  addRace(race: Race):void {
    this.http.post(this.url + '/create', race, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }

  getRace(id: number): Observable<Race> {
    return this.http.get<Race>(this.url + '/' + id, this.httpOptions)
  }
  deleteRace(id: number): void {
    this.http.delete(this.url + '/' + id, this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }
  updateRace(r: Race) {
    this.http.put<Race>(this.url +'/' + r.id ,r,  this.httpOptions).subscribe(() => this.router.navigate(['/']));
  }
}
