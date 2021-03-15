import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title = 'Posts';

  allpost: any;

  constructor(private postservice: PostService) { }

  ngOnInit() {
  
   
    this.postservice.getposts().subscribe((data) => {
      this.allpost = data
    })
  }
}