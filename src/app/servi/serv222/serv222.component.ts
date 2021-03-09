import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-serv222',
  templateUrl: './serv222.component.html',
  styleUrls: ['./serv222.component.css']
})
export class Serv222Component implements OnInit {
  @Output() childcomponent:EventEmitter<any>= new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
 
}
