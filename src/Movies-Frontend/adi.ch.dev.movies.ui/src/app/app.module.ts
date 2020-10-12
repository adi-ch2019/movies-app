//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//services
import{MoviesService} from './services/movies.service';
// components
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { DeleteMoviesComponent } from './delete-movies/delete-movies.component';
import { NewMoviesComponent } from './new-movies/new-movies.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import {WelcomeComponent} from './home/welcome.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    DeleteMoviesComponent,
    NewMoviesComponent,
    ShowMovieComponent,
    UpdateMovieComponent,
    WelcomeComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: 'movies', component: MoviesComponent},
      { path: 'new-movie', component: NewMoviesComponent},
      { path: 'update-movie/:id', component: UpdateMovieComponent},
      { path: 'delete-movie/:id', component: DeleteMoviesComponent},
      { path: 'show-movie/:id', component: ShowMovieComponent}
    ])
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
