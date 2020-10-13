import { Component,Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>


       <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
       <ul class='nav nav-pills' >

        <li ><a class='nav-link' routerLinkActive='active' [routerLink]="['/movies']">Movie List</a></li>

        <li *ngIf="auth.isAuthenticated$" (click)="auth.logout({ returnTo: document.location.origin })">

        <a class='nav-link'  routerLinkActive='active' [routerLink]="['/welcome']" >
          Log out
        </a>
        </li>
        </ul>

     </ng-container>

     <ng-template #loggedOut>
     <ul class='nav nav-pills' >

        <li ><a class='nav-link' routerLinkActive='active' [routerLink]="['/movies']" (click)="auth.loginWithRedirect()">Log in</a></li>
      </ul>
      </ng-template>

    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Movies Application';

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}
