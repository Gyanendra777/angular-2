import { Component, OnInit } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 
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
  ngOnChanges(){
    console.log(this.desionservice.userName)
  }

  ngOnInit(): void {
  }

}
