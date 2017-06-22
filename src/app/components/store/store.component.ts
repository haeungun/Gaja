import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

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
                let storage = firebase.storage();
                let vm = this;
                service.getAllStore().subscribe(store => {
                  store.forEach(s => {
                    var pathReference = storage.ref(s.logo);
                    pathReference.getDownloadURL().then(function (logo_url) {
                      s.logo = logo_url;
                      vm.stores.push(s);
                    });
                    
                  })
                });
  }

  ngOnInit() {
  }


  showStoreDetail(aStore) {
    // Forward store uid
    console.log(aStore.$key);
    this.router.navigate(['/store-detail'], {queryParams: {'store_uid': aStore.$key}});
  }
}
