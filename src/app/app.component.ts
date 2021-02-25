import { Component } from '@angular/core';
import { ServeService } from './serve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 jp={};
  constructor(private ser:ServeService) {     
  } 
  ngOnInit(){
    this.jp = this.ser.product;
  }
  
}
