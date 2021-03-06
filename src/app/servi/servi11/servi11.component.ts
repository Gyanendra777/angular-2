import { Component, OnInit } from '@angular/core';
import { ServiService } from '../../servi.service';

@Component({
  selector: 'app-servi11',
  templateUrl: './servi11.component.html',
  styleUrls: ['./servi11.component.css']
})
export class Servi11Component implements OnInit {

  constructor( private _Dependene:ServiService) { }
sd={};
  ngOnInit(): void {
    this.sd = this._Dependene.dependey
  }
  clickmethed(){
    this._Dependene.masegalert()
  }

}
