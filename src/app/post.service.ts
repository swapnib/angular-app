import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { observable, Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post: any[];
  url = 'http://jsonplaceholder.typicode.com/posts/';
  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get(this.url).pipe(catchError(this.handleError('Error', [])));
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
    console.log(error.status);
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
  // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  createPost(post) {
     return this.http.post(this.url, JSON.stringify(post));
  }
}
