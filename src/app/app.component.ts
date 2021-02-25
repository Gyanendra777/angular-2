import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ServeService } from './serve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  userName;

  getbalu(vad){
    // this.userName= vad.value;
    this.desionservice.userName.next(vad.value)
  }
  constructor(private desionservice:ServeService) {   
    this.desionservice.userName.subscribe(vad =>{
      this.userName = vad
    })  
  } 
}
