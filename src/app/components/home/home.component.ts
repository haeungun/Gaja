import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  status;

  constructor() { 
    this.status = 'sign-in';
  }

  ngOnInit() {
  }

  setStatus(status) {
    this.status = status;
    console.log(this.status);
  }
}
