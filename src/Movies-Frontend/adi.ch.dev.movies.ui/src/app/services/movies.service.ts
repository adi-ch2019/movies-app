import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  _baseURL:string="/api/Movies";
  constructor(private http:HttpClient) { }

  getAllMovies()
  {
    return this.http.get<Movie[]>(this._baseURL+"/GetMovies");
  }
}
