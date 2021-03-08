import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  v:any="" ;
  s
  sentdata(raju){ 
    this.s = raju
  }
  parentComponent($event){
    this.v = $event;
  }
  constructor() {   
   
  } 
}
