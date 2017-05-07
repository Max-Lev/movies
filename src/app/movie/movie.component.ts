import { GetMoviesService } from './../get-movies.service';
import { Component, OnInit, AfterContentInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, AfterContentInit, OnDestroy {

  subscription: Subscription;
  movie: any;
  constructor(private _getMoviesService: GetMoviesService) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this._getMoviesService.movie$.subscribe((movie) => {
      console.log(`selected movie:`, movie);
      this.movie = movie;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
