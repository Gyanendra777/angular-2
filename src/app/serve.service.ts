import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor() { }

  product =[
    {name:"leptap",id:1},
    {name:"mobile",id:2},
    {name:"windo",id:3}
  ]
}
