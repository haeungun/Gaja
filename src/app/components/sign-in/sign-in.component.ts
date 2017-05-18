import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    let buttons = document.getElementById('buttons');
    buttons.style.display = 'none';
    this.router.navigateByUrl('home/my-info');
  }
  
}
