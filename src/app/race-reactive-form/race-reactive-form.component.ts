import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';
import { Router } from '@angular/router';
import { PonyService } from '../pony.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Race } from '../race';
import { Pony } from '../pony';

@Component({
  selector: 'app-race-reactive-form',
  templateUrl: './race-reactive-form.component.html',
  styleUrls: ['./race-reactive-form.component.css']
})
export class RaceReactiveFormComponent implements OnInit {

  listPoneys: Array<Pony>;
  selectedPonies: Array<Pony>;

  raceForm = this.fb.group({
    location: ['nullepart', Validators.required],
    date: [new Date()],
    ponies: [null],
  })

  constructor(private fb: FormBuilder,
    private servicePonies: PonyService,
    private router: Router,
    private service: RaceService) {
      this.selectedPonies = [];
      servicePonies.getAllPonies().subscribe(p => this.listPoneys = p);
     }

  ngOnInit() {

  }

  onSubmit() {
    const dateFinal = new Date(this.raceForm.value.date.year, this.raceForm.value.date.month, this.raceForm.value.date.day);
    this.raceForm.value.ponies = this.selectedPonies;
    const r: Race = this.raceForm.value;
    r.date = dateFinal;
    this.service.addRace(r);
    this.selectedPonies.forEach((x) => this.listPoneys.push(x));
  }

}
