import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import { UserData } from '../../models/user-data.model';

import { slideInOutAnimation } from '../../animations/index';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [AuthService],

  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})

export class SignUpComponent implements OnInit {

  user = new UserData();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signUp() {
    this.auth.signUpUser(this.user);
  }
}
