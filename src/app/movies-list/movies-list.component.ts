import { GetMoviesService } from './../get-movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  private moviesList: Array<any> = [];
  constructor(private _getMoviesService: GetMoviesService) { }

  ngOnInit() {
    this._getMoviesService.getMovies().subscribe((movies) => {
      this.moviesList = movies;
    });
  }

  selectedMovie(movie) {
    this._getMoviesService.setMovie(movie);
  }

}
