import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { UserData } from '../../models/user-data.model';


@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [AuthService],
})

export class SignInComponent implements OnInit {

  user = new UserData();

  constructor(private router: Router,
              private auth: AuthService) {}

  ngOnInit() {
  }

  signIn() {
    //this.auth.signInUser(this.user);
    
    let buttons = document.getElementById('buttons');
    buttons.style.display = 'none';
    this.router.navigateByUrl('home/my-info');
    
  }
  
}
