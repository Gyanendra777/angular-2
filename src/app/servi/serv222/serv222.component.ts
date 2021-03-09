
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-serv222',
  templateUrl: './serv222.component.html',
  styleUrls: ['./serv222.component.css']
})
export class Serv222Component implements OnInit {
  // @Output() childcomponent:EventEmitter<any>= new EventEmitter()

  constructor(private _interactionService: InteractionService,private _interactionServic: InteractionService) { }
  messages
  ngOnInit(): void {
    this._interactionService.teacherMessage.subscribe(
        message1 => {
          this.messages =  message1
        }
      )
    }
    name() {
    this._interactionServic.sendMessag("good morning teacher")
    
  }
    name2() {
    this._interactionServic.sendMessag("thunk you teacher")
    
  }
  
 
}
