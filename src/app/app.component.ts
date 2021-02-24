import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor() {     
    let x = 10;
    if (x==10) {
      let x= 20;
      console.log(x)
    }
    console.log(x);  
  } 
}
