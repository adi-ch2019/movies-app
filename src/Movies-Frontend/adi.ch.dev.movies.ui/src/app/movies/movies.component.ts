import { Component, OnInit } from '@angular/core';

import {Movie} from '../interfaces/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'pm-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: any;

  constructor(private service:MoviesService) { }

  ngOnInit(): void {
     this.service.getAllMovies().subscribe(data=>{
      this.movies=data;
    })
  }

}
