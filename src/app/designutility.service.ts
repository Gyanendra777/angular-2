import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {
  product=[
    {name:"mobile",id :2},
    {name:"TV",id :3},
    {name:"Leptap",id :4},
  ];
  constructor() { }
  messageAlert(){
    alert ("thanks for subscribe.we will get in touch with you shortly")
  }
}
