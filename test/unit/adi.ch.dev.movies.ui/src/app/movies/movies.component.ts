import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  favoriteMovies$: Observable<Movie[]>;
  error: string;
  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.favoriteMovies$ = this.movieService.getFavoriteMovies().pipe(
      catchError((error: any) => {
        this.error = error;

        return of([]);
      })
    );
  }
}
