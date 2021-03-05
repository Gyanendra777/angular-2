import { Component } from '@angular/core';
import { DesignutilityService } from './designutility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 texts={}
  constructor(private _desine:DesignutilityService) {}
  aliAdd(){
    this._desine.messageAlert()
  }
  
  ngOnInit(){
    this.texts = this._desine.product

  }

}
