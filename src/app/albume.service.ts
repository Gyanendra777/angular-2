import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AlbumeService {

  constructor(private httpclient: HttpClient) { }

  getAlbime(): Observable<any>{
    return this.httpclient.get("http://jsonplaceholder.typicode.com/photos/?albumid=4")
  }
}
