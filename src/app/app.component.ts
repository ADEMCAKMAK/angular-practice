import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isFetching: boolean;
  error = null;
  errorSubs: Subscription;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnDestroy(): void {
    this.errorSubs.unsubscribe();
  }

  ngOnInit() {

    this.errorSubs = this.postService.error.subscribe((errorMsg) => {
      this.error = errorMsg;
    });
    this.isFetching = true;
    this.postService.fetchPosts().subscribe((response) => {
        this.loadedPosts = response;
        this.isFetching = false;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.postService.createAndStorePost(postData.title, postData.content);

  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe((response) => {
        this.loadedPosts = response;
        this.isFetching = false;
    }, error => { this.error = error.message; this.isFetching = false });
    
  }

  onClearPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
      this.isFetching = false;
  });
  }

  onHandleError() {
    this.error = null;
  }

}
