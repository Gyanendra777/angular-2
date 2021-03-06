import { Component, OnInit } from '@angular/core';
import { Ser } from '../ser';
@Component({
  selector: 'app-serv222',
  templateUrl: './serv222.component.html',
  styleUrls: ['./serv222.component.css']
})
export class Serv222Component implements OnInit {

  constructor() { }
  thank(){
    const run = new Ser()
    run.name()
  }

  ngOnInit(): void {
  }

}
