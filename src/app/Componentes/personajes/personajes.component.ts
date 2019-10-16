import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonajesApiService } from './personajes-api.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  constructor(private personajeSvc: PersonajesApiService) { }
  allPersonajes: Observable<any>;

  ngOnInit() {
    this.getPersonajes();
  }
  getPersonajes() {
    this.allPersonajes = this.personajeSvc.getAllPersonajes();
  }
}
