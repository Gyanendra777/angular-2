import { Component, OnInit } from '@angular/core';
import { ServiService } from '../../servi.service';

@Component({
  selector: 'app-servi11',
  templateUrl: './servi11.component.html',
  styleUrls: ['./servi11.component.css']
})
export class Servi11Component implements OnInit {

  constructor( private _Dependene:ServiService) { }
  sd=[];
  ngOnInit(): void {
  
    // http ko  hem is trike se vi call kr skte h or ye k trika or v h
    this._Dependene.produc().subscribe(produ => this.sd = produ );
    
    //  or yh dusra trika  h 
    this._Dependene.produc().subscribe(produ =>{
        this.sd = produ;
    });

  }


}
