
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-serv222',
  templateUrl: './serv222.component.html',
  styleUrls: ['./serv222.component.css']
})
export class Serv222Component implements OnInit {
  @Output() childcomponent:EventEmitter<any>= new EventEmitter()

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {
    this._interactionService.teacherMessage$.subscribe(
      Message => {
       if (Message === "Good Morning") {
         alert ('Good morning teacher')
         
       } else if (Message === "Well Done"){
         alert ('Thank you teacher')
       }
      }
    )
  }
 
}
