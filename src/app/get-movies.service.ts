import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs";
@Injectable()
export class GetMoviesService {

  movie: Subject<any> = new Subject<any>();
  movie$ = this.movie.asObservable();
  constructor(private _http: Http) {

  }

  getMovies(): Observable<any> {
    console.log('get movies service');
    return this._http.get('src/data/movies.json').map((data: any) => {
      return data.json();
    });
    // .catch((err) => {
    //   console.log(err);
    //   return err;
    // });

  }

  setMovie(movie): Observable<any> {
    this.movie.next(movie);
    return this.movie;
  }

}
