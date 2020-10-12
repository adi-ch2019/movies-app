import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movies'

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
  getMovieById(id:string){
    return this.http.get<Movie>(this._baseURL+"/SingleMovie/"+id);
  }
}
