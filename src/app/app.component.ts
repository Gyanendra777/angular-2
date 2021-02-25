import { Component } from '@angular/core';
import { ServeService } from './serve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  su:boolean=true;
 product={};
  constructor( private service:ServeService ) {     
  } 
  ngOnInit(){
    this.service.pridect()
    .subscribe(ret => this.product = ret)
  }

}
