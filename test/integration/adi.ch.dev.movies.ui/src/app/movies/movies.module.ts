import { NgModule } from '@angular/core';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {MoviesGuard} from './movies.guard';



@NgModule({
  declarations: [MovieListComponent],
  imports:  [
    RouterModule.forChild([
      { path: 'movies', component: MovieListComponent, canActivate:[MoviesGuard] },
      {
        path: 'movies/:id',
        component: MovieDetailComponent , canActivate:[MoviesGuard]
      }
    ]),
    SharedModule
  ]
})
export class MoviesModule { }
