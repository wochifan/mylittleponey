import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

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


  constructor(private router: Router, private userService: UserService) {
    this.identifiant = sessionStorage.getItem('user');
    if (this.identifiant !== null) {
      this.connected = true;
    }
   }

  ngOnInit() {

  }

  onSubmit() {
    this.userService.authenticate(this.model, () => {
      this.router.navigateByUrl('/');
    })

    // if (this.model.username !== null && this.model.password === "password") {
    //   sessionStorage.setItem('user', this.model.loging);
    //   this.identifiant = this.model.username;
    //   this.connected = true;

    // } else {
    //   this.error = "Mauvais identifiant";
    // }

  }

  userDisconnect() {
    sessionStorage.removeItem('user');
    this.connected = false;
    this.identifiant = null;
  }
}
