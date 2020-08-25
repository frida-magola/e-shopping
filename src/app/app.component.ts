import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'e-shopping';

  constructor(
    auth: AuthService,
    router: Router,
    private userService: UserService
  ) {
    auth.user$.subscribe((user) => {
      if (user) {
        this.userService.save(user);
        const returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
