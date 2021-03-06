import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiService {
dependey=[
  {name:"raju",id:1},
  {name:"raju2",id:12},
  {name:"raju3",id:13},
]
  constructor() { }
  masegalert(){
    alert ('this is a in dependency Injection')
  }
}
