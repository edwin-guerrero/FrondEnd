import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  @Input() personaje: any;
  constructor() { }

  ngOnInit() {
  }

}
