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
  }

  setStyle(name) {
    let btn_style = {
      'background-color': name === this.status ? 'white' : '#EAF0F4',
      'color': name === this.status ? '#657083' : '#BEBEBE',
    }
    return btn_style;
  }

}
