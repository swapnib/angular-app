import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(private service: PostService) {
  }

  ngOnInit() {
     this.service.getPosts().subscribe(data => {
    this.posts = data;
   }
   );
  }

//   createPost(input: HTMLInputElement) {
//     let post = {title: input.value};
//     this.service.createPost(post).subscribe(data => {
//       post ['id'] = data.id;
//      this.posts.splice(0, 0, post);
//   }, error => {
// alert("Error Occurred");
//   }
//   );
  // }

}
