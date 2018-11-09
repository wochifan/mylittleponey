import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  races: Array<Race> = [];
  votes: Array<number> = new Array<number>();
  
  constructor(private service: RaceService) {
  }

  ngOnInit() {
    this.service.getAllRaces().subscribe(r => {
      this.races = r;
      for (const i in this.races) {
        this.votes.push(0);
      }
    });
  }

  deleteRace(id: number) {
    this.service.deleteRace(id);
  }

  onClickParent(race: Race) {
    const index = this.races.indexOf(race);
    this.votes[index] += 1;
  }

}
