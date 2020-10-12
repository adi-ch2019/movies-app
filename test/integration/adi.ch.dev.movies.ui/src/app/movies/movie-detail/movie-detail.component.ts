import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movies';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'pm-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  pageTitle = 'Movie Detail';
  errorMessage = '';
    movie: Movie ;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service:MoviesService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    console.log(param);
    if (param) {

      this.getMovie(param);
    }
   
  }
  getMovie(id: string): void {
    this.service.getMovieById(id).subscribe({
      next: data => this.movie = data,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/movies']);
  }

}
