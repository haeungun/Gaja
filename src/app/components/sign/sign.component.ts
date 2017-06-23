import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';


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
  rule;

  categories = ['Westrern', 'Korean', 'Chinese', 'Japanese', 'Dessert'];
  rules = ['Client', 'Store'];

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

  // Sign in button event
  signIn() {
    this.status = 'sign';
    this.authService.signInUser(this.email, this.password, this.showMyInfo);
    
  }

  // Sign up button event
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

    this.authService.signUpUser(this.email, this.password, this.name, this.tel, this.rule);
    
    // Set status value
    this.status = 'sign-in';
  }
  
  showMyInfo = function() {
    this.router.navigateByUrl('home/my-info');
  }
  
  isAuth() {
    return this.authService.isAuthenticated();
  }


}
