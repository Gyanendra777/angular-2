import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { CompComponent } from './comp/comp.component';
import { ServiceService } from './service.service';
import { HemantCmpComponent } from './hemant-cmp/hemant-cmp.component';
// import { SrComponent } from './share/sr/sr.component';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    HemantCmpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ShareModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
