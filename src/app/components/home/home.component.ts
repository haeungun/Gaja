import { Component, OnInit } from '@angular/core';

import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0})) 
      ])
    ])
  ]
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
