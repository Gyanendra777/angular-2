import { Component } from '@angular/core';
import { Photos } from './photos';
import { AlbumeService } from './albume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private albumeservice:AlbumeService) {     
  } 
  list : Photos[]
  AlbumSelected : Number
  ngOnInit(){
    this.albumeservice.getAlbime().subscribe(
      data=>
      {
        this.list = data;
      }
    )
  }

}
