import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import { ActivatedRoute } from '@angular/router';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {
race:Race = new Race();

  constructor(private route:ActivatedRoute, private service:RaceService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.getRace(id).subscribe(r => this.race = r)
  }

}
