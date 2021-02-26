import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search:string;
  
 productArr = [
   {
     son:1,
     name:"mobile",
     price:'12000',
     availity:'available'
  },
   {
     son:2,
     name:"realem c2",
     price:'120000',
     availity:'available'
  },
   {
     son:3,
     name:"realem",
     price:'10000',
     availity:'not available'
  },
   {
     son:4,
     name:"sumsum",
     price:'14000',
     availity:'available'
  },
   {
     son:5,
     name:"tv",
     price:'12000',
     availity:'available'
  },
   {
     son:6,
     name:"tv",
     price:'12000',
     availity:'available'
  },
   {
     son:6,
     name:"dask top",
     price:'123000',
     availity:'available'
  },
   {
     son:7,
     name:"dask top",
     price:'10000',
     availity:'available'
  },
 ]
  constructor() {     
  } 
}
