import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Race } from '../race';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.css']
})
export class RaceDetailsComponent implements OnInit {
  @Input() race : Race;
  @Output() onClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  addVote(race){
    this.onClick.emit(race);
  }

}
