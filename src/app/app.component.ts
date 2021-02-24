import { Component } from '@angular/core';
import { Cl } from './cl';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'anguler2';
  value: string;
  raju;
  todaydate
  
  public run = [];
  submitvalue(val) {
    this.value = val.value
  }
  constructor(private serves: ServiceService) { 
    console.log(this.serves.getEmployees());
    
    //  console.log(this.raju)
     }
  ngOnInit() {
    console.log(this.serves.getEmployees())
    this.run = this.serves.getEmployees();
    this.raju = this.serves.serviceproperty;
    console.log(this.raju)
 
    // this.todaydate = this.showTodayDate();
 }
 onClickSubmit(data) {
    alert("Entered Email id : " + data.emailid);
 }
}
