import { Injectable } from '@angular/core';
import { Pony } from './pony';
import { PONIES } from './ponies-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PonyService {
  ponies: Array<Pony>;

  constructor() {
    this.ponies = [];
    this.ponies = PONIES;
   }
   getAllPonies(): Observable<Array<Pony>> {
     return of(this.ponies);
   }
   addPony(pony:Pony): void {
     this.ponies.push(pony);
   }
}
