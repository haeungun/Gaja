import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})

export class AppComponent {
  
  constructor(private auth: AuthService) {}
  
  isAuth() {
    let logout = document.getElementById('logout');
    if (this.auth.isAuthenticated()) {
      logout.style.display = "inline";
    } else {
      logout.style.display = "none";
    }
  }

  signOut() {
    this.auth.signOutUser();
  }
}
