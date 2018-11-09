import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PonyService } from '../pony.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Race } from '../race';
import { Pony } from '../pony';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

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
    location: ['location', Validators.required],
    date: [new NgbDate(2018, 2, 1), Validators.required],
    ponies: Array<Pony>()
  });

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
          location: r.location,
          date: r.date,
          ponies: r.ponies
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
    if(this.add)
    {
      this.raceForm.value.date.month -= 1; // pour corriger un bug ou c'est toujours le mois suivant qui apparait
      const dateForm: Date = new Date(this.raceForm.value.date.year, this.raceForm.value.date.month, this.raceForm.value.date.day);
      const r: Race = new Race(this.raceForm.value.location, dateForm);
      r.ponies = this.selectedPonies;
      this.service.addRace(r);
    }
    else
    {
        let r = new Race(this.raceForm.value.location, new Date(this.raceForm.value.date.year, this.raceForm.value.date.month-1, this.raceForm.value.date.day));
        r.id = this.idRace;
        r.ponies = this.raceForm.value.ponies;
        this.service.updateRace(r);

    }
  }
}
