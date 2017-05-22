import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import { UserData } from '../../models/user-data.model';


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [AuthService],
})

export class SignUpComponent implements OnInit {
  
  rules = ['Client', 'Store'];
  rule;

  user = new UserData();

  constructor(private auth: AuthService) { 
    this.rule = this.rules[0];
  }

  ngOnInit() {
  }

  signUp() {
    this.auth.signUpUser(this.user);
  }
}
