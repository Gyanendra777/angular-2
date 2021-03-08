import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
// import { ServiService } from 'src/app/servi.service';

@Component({
  selector: 'app-serv222',
  templateUrl: './serv222.component.html',
  styleUrls: ['./serv222.component.css'],
  
})
export class Serv222Component implements OnInit {
@Output()  childComponent:EventEmitter<any> = new EventEmitter()
@Input() child

 

  constructor() {
    // console.log(this.raje);
   }


  ngOnInit(): void {
    // this.childComponent.emit("{name:'raju', id:1},{name:'raju', id:1},{name:'raju', id:1},")

  }
  sentdata(ra){
    this.childComponent.emit(ra) 
    
  }
  
  
 
}
