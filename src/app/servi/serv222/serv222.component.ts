import { Component, OnInit } from '@angular/core';
import { ServiService } from 'src/app/servi.service';

@Component({
  selector: 'app-serv222',
  templateUrl: './serv222.component.html',
  styleUrls: ['./serv222.component.css']
})
export class Serv222Component implements OnInit {

  constructor(private _Dependene:ServiService) { }

  ngOnInit(): void {
  }
  clickmethed(){
    this._Dependene.masegalert()
  }
}
