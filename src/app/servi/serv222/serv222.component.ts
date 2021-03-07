import { Component, Input, OnInit } from '@angular/core';
// import { ServiService } from 'src/app/servi.service';

@Component({
  selector: 'app-serv222',
  templateUrl: './serv222.component.html',
  styleUrls: ['./serv222.component.css']
})
export class Serv222Component implements OnInit {
@Input() child
  constructor() { }



  ngOnInit(): void {
  }
 
}
