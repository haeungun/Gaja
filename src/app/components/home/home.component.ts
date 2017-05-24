import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { trigger, state, animate, transition, style } from '@angular/animations';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  status;

  constructor(private authService: AuthService,
              private router: Router) {
                
                if(this.isAuth()) {
                  this.router.navigateByUrl('home/my-info');
                  this.status = 'sign';
                } else {
                  this.router.navigateByUrl('home/sign-in');
                  this.status = 'sign-in';
                }  
  }

  ngOnInit() {
  }

  setStatus(status) {
    this.status = status;
  }

  setStyle(name) {
    let btnStyle = {
      'background-color': name === this.status ? 'white' : '#EAF0F4',
      'color': name === this.status ? '#657083' : '#BEBEBE',
    }
    return btnStyle;
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

}
