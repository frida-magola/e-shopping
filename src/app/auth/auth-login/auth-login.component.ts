import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css'],
})
export class AuthLoginComponent {
  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.signInWithGoogle();
  }
}
