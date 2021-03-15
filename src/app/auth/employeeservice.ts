import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{observable, Observable} from 'rxjs';
import {Employee} from './employee';
import {Loginemployee} from './login/loginemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  url="http://localhost:4200/";

  constructor( private http:HttpClient) { } 
 
  createemployee(employee:Employee): Observable<any>{
    
    return this.http.post(this.url+'api/Employeemasters',employee);
  }

  loginemployee(loginEmployee: Loginemployee): Observable<any> {
    return this.http.post(this.url + 'api/Login', loginEmployee);
  }
}