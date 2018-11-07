import { Component, OnInit, Input } from '@angular/core';
import { Pony } from './../pony';

@Component({
  selector: 'app-pony-details',
  templateUrl: './pony-details.component.html',
  styleUrls: ['./pony-details.component.css']
})
export class PonyDetailsComponent implements OnInit {
  @Input() pony: Pony; // On va lui envoyer le poney, donc pas besoin de constructeur

  // Appelé une seule fois au lancement de l'application
  constructor() {
    // this.pony = new Pony('blancbec', 10, 0, 'white');


   } 

  // Appelé à chaque rafraichissement de la page
  ngOnInit() { 
    
  }

}
