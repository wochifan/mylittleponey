import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { RaceService } from '../race.service';
import { Router } from '@angular/router';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';

@Component({
  selector: 'app-race-form',
  templateUrl: './race-form.component.html',
  styleUrls: ['./race-form.component.css']
})
export class RaceFormComponent implements OnInit {
  model: Race;
  listPoneys: Array<Pony>
  ponySelected: Array<boolean>;
  constructor(private service: RaceService,
              private router: Router,
              private servicePonies: PonyService) {
    this.model = new Race();
    servicePonies.getAllPonies().subscribe(p => this.listPoneys = p);
    this.ponySelected = [];
   }

  ngOnInit() {
  }
  onSubmit(){
    this.ponySelected.forEach((e, i) => {
    if(e === true) {
      this.model.ponies.push(this.listPoneys[i]);
    }})
    this.service.addRace(this.model);
    this.router.navigate(['']);
  }

}
