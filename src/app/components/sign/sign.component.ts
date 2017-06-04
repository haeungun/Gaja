import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import * as model from '../../models/builder';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  status;

  email;
  password;
  name;
  tel;

  rules = ['Client', 'Store'];
  rule;

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
      'color': name === this.status ? '#657083' : '#AAAAAA',
    }
    return btnStyle;
  }

  signIn() {
    this.status = 'sign';
    this.authService.signInUser(this.email, this.password);
    this.router.navigateByUrl('home/my-info');
  }

  signUp() {
    if (this.email.length < 1) {
      alert("Input your email");
      return;
    }
    if (this.password.length < 1) {
      alert("Input your password");
    }
    if (this.tel.length < 1) {
      alert("Input your phone number")
    }

    this.authService.signUpUser(this.email, this.password);
    this.status = 'sign-in';
  }
  
  userData() {
    let user: model.BuilderPattern.User = new model.BuilderPattern.UserBuilder(this.email)
                                              .setName(this.name)
                                              .setTel(this.tel)
                                              .builder();

  }

  storeData() {
    let store: model.BuilderPattern.Store = new model.BuilderPattern.StoreBuilder(this.email)
                                                .builder();
  }
  
  isAuth() {
    return this.authService.isAuthenticated();
  }


}
