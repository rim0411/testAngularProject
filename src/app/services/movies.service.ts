import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
  // get list movies and the key i generated after craeting a account on web site
  getmovies():Observable<any>{
    return <any> this.http.get("https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=WVti5jDDU9tHXmgYAehif6vZtOmXdQZm")
  }
  filterMovies(criticisPick){
    return <any> this.http.get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=${criticisPick}&offset=20&opening-date=1930-01-01:1940-01-01&order=by-publication-date&publication-date=1930-01-01%3A1940-01-01&reviewer=Stephen%20Holden&query=lebowski&api-key=WVti5jDDU9tHXmgYAehif6vZtOmXdQZm`)
  }
}
