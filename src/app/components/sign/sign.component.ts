import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserData } from '../../models/user-data.model';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  status;

  rules = ['Client', 'Store'];
  rule;

  user = new UserData();

  constructor(private authService: AuthService,
              private router: Router,) { 
      this.status = 'sign-in';
      this.rule = this.rules[0];
  }

  ngOnInit() {
  }

  setStatus(status) {
    this.status = status;
  }

  // Buttons style 
  setStyle(name) {
    let btnStyle = {
      'background-color': name === this.status ? 'white' : '#EAF0F4',
      'color': name === this.status ? '#657083' : '#BEBEBE',
    }
    return btnStyle;
  }

  signIn() {
    this.status = 'sign';
    this.authService.signInUser(this.user);
    this.router.navigateByUrl('home/my-info');
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }
}
