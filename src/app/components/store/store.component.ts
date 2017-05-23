import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  stores = [
    {
      name: "FIRST",
      content: "This is first contents."
    },{
      name: "SECOND",
      content: "This is second contents."
    }
  ];

  constructor() { 
  }

  ngOnInit() {
  }

}
