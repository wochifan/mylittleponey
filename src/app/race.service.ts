import { Injectable } from '@angular/core';
import { Race } from './race';
import { RACES } from './races-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  races: Array<Race>;

  constructor() {
    this.races = [];
    this.races = RACES;
  }
  getAllRaces(): Observable<Array<Race>> {
    return of(this.races);
  }
  addRace(race: Race):void{
    this.races.push(race);
  }
}
