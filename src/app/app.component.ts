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
  
  constructor(private auth: AuthService,
              private router: Router) {}
  
  isAuth() {
    let logout = document.getElementById('logout');
    if (this.auth.isAuthenticated()) {
      logout.style.display = "inline";
    } else {
      logout.style.display = "none";
    }
  }

  signOut() {
    let answer = confirm("Are you sure you want to sign out?");
    if (answer === true) {
      this.auth.signOutUser();

      let buttons = document.getElementById('buttons');
      buttons.style.display = 'block';
      this.router.navigateByUrl('home/sign-in');
    }
  }
}
