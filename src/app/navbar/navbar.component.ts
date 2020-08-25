import { AppUser } from './../models/app-user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  appUser: AppUser;

  constructor(private auth: AuthService) {
    this.auth.appUser$.subscribe((appUser) => {
      // console.log(appUser);
      this.appUser = appUser;
    });
  }

  // tslint:disable-next-line: typedef
  logout() {
    this.auth.signOut();
  }
}
