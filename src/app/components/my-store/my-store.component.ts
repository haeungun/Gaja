import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.css']
})
export class MyStoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addMenu() {
    console.log("ADD!!");
  }
}
