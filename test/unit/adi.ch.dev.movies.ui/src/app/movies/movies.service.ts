import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movie } from '../../api/movies/movies-single.json';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getFavoriteMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(environment.favoriteUrl).pipe(retry(2));
  }
}
