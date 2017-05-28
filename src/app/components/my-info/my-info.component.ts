import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {


  constructor(private router: Router,) { }

  ngOnInit() {
  }

  showComponent(component) {
    this.router.navigateByUrl('home/' + component);
  }
}
