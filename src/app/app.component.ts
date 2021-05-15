import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.http.post(
      'https://ng-angular-guide-f6090-default-rtdb.firebaseio.com/posts.json', 
      postData
    ).subscribe((response) => {
      console.log(response);
    });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get<{[key: string]: Post}>(
      'https://ng-angular-guide-f6090-default-rtdb.firebaseio.com/posts.json'
    )
    .pipe(map((response) => {
      const postArray: Post[] = [];
      for( let key in response ){
        if( response.hasOwnProperty(key) )
          postArray.push({...response[key], id: key});
      }
      return postArray;
    }))
    .subscribe((response) => {
      console.log(response);
    });
  }
}
