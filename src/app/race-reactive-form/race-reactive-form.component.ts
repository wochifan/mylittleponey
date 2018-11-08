import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';
import { Router, ActivatedRoute } from '@angular/router';
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

  add: boolean;
  listPoneys: Array<Pony> = [];
  selectedPonies: Array<Pony> = [];
  listPoneysTest: Array<Pony> = [];
  idRace: number;

  raceForm = this.fb.group({
    location: ['nullepart', Validators.required],
    date: [new Date()],
    ponies: [null],
  })

  constructor(private fb: FormBuilder,
    private servicePonies: PonyService,
    private router: Router,
    private service: RaceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') === null) {
      this.add = true;

      this.servicePonies.getAllPonies().subscribe((p) => this.listPoneys = p);
    } else {
      this.add = false;
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.idRace = id;

      this.service.getRace(id).subscribe(r => {
        this.raceForm.setValue({
          location: [r.location],
          date: [r.date],
          ponies: [r.ponies]
        });
        this.selectedPonies = r.ponies;

        this.servicePonies.getAllPonies().subscribe((p) => {
          for(let po of p)
          {
            for(let ps of this.selectedPonies)
            {
              if(ps.id !== po.id)
              {
                this.listPoneys.push(po);
              }
            }
          }
        });

      });
      
    }
  }

  onSubmit() {
    const dateFinal = new Date(this.raceForm.value.date.year, this.raceForm.value.date.month, this.raceForm.value.date.day);
    this.raceForm.value.ponies = this.selectedPonies;

    const r: Race = this.raceForm.value;
    r.date = dateFinal;

    if (this.add) {
      this.service.addRace(r);
    } else {
      this.service.updateRace(this.idRace, r);
    }
  }

}
