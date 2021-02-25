import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //////////// single interceptor////////
  intercept(req,next){
    const newReq = req.clone({...});
    return next.handle(newReq).pipe(
      map(rest => {
        const newResp = resp.clone({...});
        return newResp;
      })
    );
    ///////////
  }
 
  constructor() {     
  } 
}
