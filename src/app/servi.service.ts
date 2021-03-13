import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiService {
dependey=[
  {name:"raju",id:1},
  {name:"raju2",id:12},
  {name:"raju3",id:13},
]
  constructor(private http:HttpClient) { }
  masegalert(){
    alert ('this is a in dependency Injection')
  }

  produc (): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
