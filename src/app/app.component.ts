import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //////////// पहला इंटरसेप्टर पहले अनुरोध को संभालता है////////
  // httplnterceptor[0]
  // पहला इंटरसेप्टर अंतिम पर प्रतिक्रिया को संभालता है
  intercept (req,next){
    return next.handle(req).pipe(
      map(resp => resp)
    );
  }
  // httplnterceptor[1]
  intercept (req,next){
    return next.handle(req).pipe(
      map(resp => resp)
    );
  }
    ///////////
  
 
  constructor() {     
  } 
}
