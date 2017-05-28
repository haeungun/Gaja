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

  constructor(private authService: AuthService,
              private router: Router) {
                    
  }

  ngOnInit() {
    if(this.isAuth()) {
      this.router.navigateByUrl('home/my-info');
    } else {
      this.router.navigateByUrl('home/sign');
    }  
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }
}
