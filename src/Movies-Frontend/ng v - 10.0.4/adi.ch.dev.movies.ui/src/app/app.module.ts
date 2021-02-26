import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { MoviesModule } from './movies/movies.module';

import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: 'dev-qpexv46a.auth0.com',
      clientId: 'PGuEij0vcnYWCCbvzFQZxtAJgVU9rFZS'
    }),
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    MoviesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
