import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    },{
      name: "THIRD",
      content: "This is third contents."
    }
  ];

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }


  showStoreDetail(aStore) {
    console.log("A_STORE", aStore);
    this.router.navigate(['/store-detail'], {queryParams: {store: aStore}});
  }
}
