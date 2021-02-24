import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrComponent } from './sr/sr.component';



@NgModule({
  declarations: [
    SrComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SrComponent
  ]
  
})
export class ShareModule { }
