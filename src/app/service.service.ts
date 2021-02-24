import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ServiceService {
  serviceproperty = "Service Created";
  constructor() { }
  getEmployees(){
    return [
      {"id":1,"name":"raju","age":24},
     
    ];
  }
}
