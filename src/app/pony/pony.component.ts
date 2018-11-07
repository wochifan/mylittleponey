import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {
  pony: Pony = new Pony();

  constructor(private route: ActivatedRoute,
    private service: PonyService) {
    
   }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.getPony(id).subscribe(p => this.pony = p);
  }

}
