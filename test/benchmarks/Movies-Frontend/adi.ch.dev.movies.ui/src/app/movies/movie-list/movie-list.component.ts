import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'pm-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  performFilter(listFilter: string): Movie[] {
    listFilter = listFilter.toLocaleLowerCase();
    return this.movies.filter((movie: Movie) =>
      movie.title.toLocaleLowerCase().indexOf(listFilter) !== -1);
 }
  pageTitle = 'Movie List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }

  filteredMovies: Movie[] = [];

  public movies: any;

  public selectedLanguage:any;
  statLang = [
    { value: "All", id: "123" },
    { value: "ENGLISH", id:"12" },

    { value: "HINDI",id:"23" }];

    language=[ 'All', 'ENGLISH', 'HINDI'];

    performFilterLang(listFilter: string): Movie[] {
      listFilter = listFilter.toLocaleLowerCase();

      return this.movies.filter((movie: Movie) =>
        movie.language.toLocaleLowerCase().indexOf(listFilter) !== -1);
   }

  constructor(private service:MoviesService) { }

  onOptionsSelected() {
    console.log(this.selectedLanguage);
    if( this.selectedLanguage=="All")
    {
      console.log(this.selectedLanguage);
      this.filteredMovies = this.movies;
    }
    else
    {
      this.filteredMovies = this.performFilterLang(this.selectedLanguage);
    }

  }

  public selectedLocation:any;
  statLoc = [
    { value: "All", id: "1234" },
    { value: "DELHI", id:"12345" },

    { value: "BANGALORE",id:"123456" }];

    location=[ 'All', 'DELHI', 'BANGALORE'];

    performFilterLoc(listFilter: string): Movie[] {
      listFilter = listFilter.toLocaleLowerCase();

      return this.movies.filter((movie: Movie) =>
        movie.location.toLocaleLowerCase().indexOf(listFilter) !== -1);
   }


  onOptionsSelectedLocation() {
    console.log(this.selectedLocation);
    if( this.selectedLocation=="All")
    {
      console.log(this.selectedLocation);
      this.filteredMovies = this.movies;
    }
    else
    {
      this.filteredMovies = this.performFilterLoc(this.selectedLocation);
    }

  }
  ngOnInit(): void {
    this.service.getAllMovies().subscribe({
      next: data =>{
      this.movies=data;
      this.filteredMovies=this.movies;
     
    },
    error: err=>this.errorMessage=err
  });


}
}
