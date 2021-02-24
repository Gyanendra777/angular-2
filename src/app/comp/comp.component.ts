// import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  @Input()  myvalue="ux";
public emploees =[];

  constructor(private serves:ServiceService) { 
    console.log('constructor called')
    
  }
  
  ngOnInit() {
   console.log('ngOnInit called')
   this.emploees = this.serves.getEmployees();
   console.log(this.emploees);
   
   }

}
