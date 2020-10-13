import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class MoviesGuard implements CanActivate, CanActivateChild {

  constructor(private auth:AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.isAuthenticated$.pipe(
        tap(loggedIn => {
          if(!loggedIn){
            this.auth.loginWithRedirect();
          }
        })
      )
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.isAuthenticated$.pipe(
        tap(loggedIn => {
          if(!loggedIn){
            this.auth.loginWithRedirect();
          }
        })
      )
  }

}
