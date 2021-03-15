import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesModule } from './courses/courses.module';
  import { StaticpagesModule } from './staticpages/staticpages.module';
  import { EmployeeserviceService } from './auth/employeeservice';


import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
  
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    CoursesModule,
    StaticpagesModule
    
  ],
  providers: [ EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
