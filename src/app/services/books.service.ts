import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
  // get list movies and the key i generated after craeting a account on web site
  getBooks():Observable<any>{
    return <any> this.http.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=WVti5jDDU9tHXmgYAehif6vZtOmXdQZm")
  }
 
}
