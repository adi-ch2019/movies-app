import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{MoviesService} from './services/movies.service';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { DeleteMoviesComponent } from './delete-movies/delete-movies.component';
import { NewMoviesComponent } from './new-movies/new-movies.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    DeleteMoviesComponent,
    NewMoviesComponent,
    ShowMovieComponent,
    UpdateMovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
