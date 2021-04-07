import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputing',
  templateUrl: './inputing.component.html',
  styleUrls: ['./inputing.component.css']
})
export class InputingComponent implements OnInit {
@Input() poser={}

  constructor() {
    console.log("INPUT compument: "+ this.poser)
   }

  ngOnInit(): void {
    
  }


}
