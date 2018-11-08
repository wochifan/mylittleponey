import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PonyDetailsComponent } from './pony-details/pony-details.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RacesComponent } from './races/races.component';
import { PonyFormComponent } from './pony-form/pony-form.component';
import { RaceFormComponent } from './race-form/race-form.component';
import { PonyReactiveFormComponent } from './pony-reactive-form/pony-reactive-form.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PickListModule} from 'primeng/picklist';

import {StepsModule} from 'primeng/steps';
import { RaceReactiveFormComponent } from './race-reactive-form/race-reactive-form.component';

import { HttpClientModule } from '@angular/common/http';
import { PonyComponent } from './pony/pony.component'
import { RaceComponent } from './race/race.component';
import { UserFormComponent } from './user-form/user-form.component';
import { PonyTransformPipe } from './pony-transform.pipe';




const routes: Routes = [
  {path: '', component: RacesComponent},
  {path: 'Ponies', component: PoniesComponent},
  {path: 'addPony', component: PonyReactiveFormComponent},
  {path: 'addRace', component: RaceReactiveFormComponent},
  {path: 'pony/:id', component: PonyComponent},
  {path: 'race/:id', component: RaceComponent},
  {path: 'updatePony/:id', component : PonyReactiveFormComponent},
  {path: 'updateRace/:id', component : RaceReactiveFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PonyDetailsComponent,
    PoniesComponent,
    RaceDetailsComponent,
    RacesComponent,
    PonyFormComponent,
    RaceFormComponent,
    PonyReactiveFormComponent,
    RaceReactiveFormComponent,
    PonyComponent,
    RaceComponent,
    UserFormComponent,
    PonyTransformPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgbModule,
    PickListModule,
    StepsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
