import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Movies } from '../../api/movies/movies-list.json';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getFavoriteMovies(): Observable<any> {
    return this.http.get<any>(environment.favoriteUrl).pipe(retry(2));
  }
}
