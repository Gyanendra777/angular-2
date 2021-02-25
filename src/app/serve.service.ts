import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeService {
  // userName = new Subject<any>();
  userName = new BehaviorSubject('')

  constructor() { }
}
