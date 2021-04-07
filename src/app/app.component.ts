import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  middle=[]

  constructor() {   } 
  
  onpostadd(post){
    this.middle.push(post)
    console.log("APP compument: "+this.middle);
    
  }
}
