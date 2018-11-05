import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pony-reactive-form',
  templateUrl: './pony-reactive-form.component.html',
  styleUrls: ['./pony-reactive-form.component.css']
})
export class PonyReactiveFormComponent implements OnInit {

  ponyForm = this.fb.group({
    name: ['nom', Validators.required, Validators.maxLength],
    age: ['0', Validators.required],
    color: ['blanc', Validators.required],
    weight: ['0', Validators.required],
  })
  constructor( private fb: FormBuilder,
    private service: PonyService,
    private router: Router) { 

    }

  ngOnInit() {
  }

  onSubmit() {
    const p: Pony = this.ponyForm.value;
    this.service.addPony(p);
    this.router.navigate(['/Ponies'])

  }

}
