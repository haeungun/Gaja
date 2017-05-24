import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})

export class AppComponent {
  
  constructor(private authService: AuthService,
              private router: Router) {}
  
  isAuth() {
    return this.authService.isAuthenticated();
  }

  signOut() {
    let answer = confirm("Are you sure you want to sign out?");
    if (answer === true) {
      this.authService.signOutUser();
      this.router.navigateByUrl('home/sign-in');
    }
  }
}
