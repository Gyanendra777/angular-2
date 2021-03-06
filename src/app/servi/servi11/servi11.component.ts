import { Component, OnInit } from '@angular/core';
import { Ser } from '../ser';

@Component({
  selector: 'app-servi11',
  templateUrl: './servi11.component.html',
  styleUrls: ['./servi11.component.css']
})
export class Servi11Component implements OnInit {

  constructor() { }

  thank(){
    const run = new Ser()
    run.name()
  }

  ngOnInit(): void {
  }

}
