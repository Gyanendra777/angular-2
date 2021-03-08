import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// import { ServiService } from 'src/app/servi.service';

@Component({
  selector: 'app-serv222',
  templateUrl: './serv222.component.html',
  styleUrls: ['./serv222.component.css']
})
export class Serv222Component implements OnInit {
  @Output() childcomponent:EventEmitter<any>= new EventEmitter()


  sentdata(chi){
    this.childcomponent.emit(chi)

  }
  constructor() { }

  ngOnInit(): void {
  }
 
}
