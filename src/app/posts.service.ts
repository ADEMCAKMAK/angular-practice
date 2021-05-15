import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    error = new Subject<string>()

    constructor(private httpClient: HttpClient){}

    createAndStorePost(title: string, content: string){

        const postData: Post = {title: title, content: content};

        this.httpClient.post<{ name: string }>(
            'https://ng-angular-guide-f6090-default-rtdb.firebaseio.com/posts.json', 
            postData,
            {
                observe: 'response'
            }
          ).subscribe((response) => {
            console.log(response);
          });
    }

    fetchPosts() {

        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        searchParams = searchParams.append('custom', 'key');
        
        return this.httpClient.get<{[key: string]: Post}>(
        'https://ng-angular-guide-f6090-default-rtdb.firebaseio.com/posts.json', {
                headers: new HttpHeaders({'custom-header':'hello'}),
                params: searchParams
            }
        )
        .pipe(map((response) => {
                const postArray: Post[] = [];
                for( let key in response ){
                    if( response.hasOwnProperty(key) )
                    postArray.push({...response[key], id: key});
                }
                return postArray;
            }),
            catchError(errorMsg => {
                // send to analytics server
                return throwError(errorMsg);
            })
        );
    }

    deletePosts() {

       return this.httpClient.delete('https://ng-angular-guide-f6090-default-rtdb.firebaseio.com/posts.json',
       {
           observe: 'events',
           responseType: 'json'
       }
       ).pipe(tap(event => {
           console.log(event);

           if ( event.type === HttpEventType.Sent ) {
                console.log('sent event')
           }
       }))
    }
}