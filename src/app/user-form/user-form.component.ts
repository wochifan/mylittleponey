import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  identifiant: string;
  model: User = new User();
  connected: boolean;
  error: string;


  constructor(private router: Router) {
    this.identifiant = sessionStorage.getItem('user');
    if (this.identifiant !== null) {
      this.connected = true;
    }
   }

  ngOnInit() {

  }

  onSubmit() {
    if (this.model.loging !== null && this.model.pass === "password") {
      sessionStorage.setItem('user', this.model.loging);
      this.identifiant = this.model.loging;
      this.connected = true;

    } else {
      this.error = "Mauvais identifiant";
    }

  }

  userDisconnect() {
    sessionStorage.removeItem('user');
    this.connected = false;
    this.identifiant = null;
  }
}
