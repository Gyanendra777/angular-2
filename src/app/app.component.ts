import { Component } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private _interactionServic:InteractionService,private _interactionService:InteractionService) {     
  }
  greetStudent(){
    this._interactionService.sendMessage("Good Morning")
  } 
  apperciateStudent(){
    this._interactionService.sendMessage("Well Done")
  } 
messagess
  ngOnInit(): void {
    this._interactionServic.teacherMessag.subscribe(
        message2 => {
          this.messagess =  message2
        }
      )
    }
}
