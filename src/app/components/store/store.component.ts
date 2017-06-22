import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StoreService } from '../../services/store.service'; 

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  // Store List
  stores = [];

  constructor(private router: Router,
              private service: StoreService,) { 

                service.getAllStore().subscribe(store => {
                  store.forEach(s => {
                    this.stores.push(s);
                  })
                });
  }

  ngOnInit() {
  }


  showStoreDetail(aStore) {
    // Forward store uid
    this.router.navigate(['/store-detail'], {queryParams: {'store_uid': aStore.$key}});
  }
}
