import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-outputing',
  templateUrl: './outputing.component.html',
  styleUrls: ['./outputing.component.css']
})
export class OutputingComponent implements OnInit {
@Output() postcreat = new EventEmitter()
varw
  constructor() { }

  ngOnInit(): void {
  }
  ondisplay(){
    const post = {
      tiele:this.varw
    }
    this.postcreat.emit(post)
    console.log("outputing compument"+post.tiele)
  }
  
}
