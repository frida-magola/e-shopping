import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../models/app-user';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    // get current user state
    this.user$ = this.afAuth.authState;
  }

  signInWithGoogle(): void {
    // store in the url in local storage
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  signInWithEmailPassword(credentials): void {}

  signUp(credentials): void {}

  // tslint:disable-next-line: typedef
  signOut() {
    this.afAuth.signOut();
  }
  // get app user admin
  get appUser$(): Observable<AppUser> {
    return this.user$.pipe(
      switchMap((user) => {
        // tslint:disable-next-line: curly
        if (user) return this.userService.get(user.uid).valueChanges();

        return of(null); // return an empty observable
      })
    );
  }
}
