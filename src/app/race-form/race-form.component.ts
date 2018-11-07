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
  dateModel;
  listPoneys: Array<Pony>
  ponySelected: Array<boolean>;
  constructor(private service: RaceService,
              private router: Router,
              private servicePonies: PonyService) {
    this.model = new Race();
    servicePonies.getAllPonies().subscribe(p => this.listPoneys = p);
   }

  ngOnInit() {
  }
  onSubmit(){
    this.model.date = new Date(this.dateModel.year, this.dateModel.month -1, this.dateModel.day);
    this.service.addRace(this.model);
  }
}
