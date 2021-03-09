import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
private _teacherMessageSource = new Subject<any>();
private _teacherMessageSourc = new Subject<any>();
teacherMessage = this._teacherMessageSource.asObservable();
teacherMessag = this._teacherMessageSourc.asObservable();

  constructor() { }

  sendMessage(message1:string){
    this._teacherMessageSource.next(message1)
  }
  sendMessag(message2:string){
    this._teacherMessageSourc.next(message2)
  }
}
