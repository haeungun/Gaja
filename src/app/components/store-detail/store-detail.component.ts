import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {

  private sub: any;
  private store;
  private storeUid;;

  constructor(private activatedRoute: ActivatedRoute,
              private service: StoreService,
              private router: Router) { 
                activatedRoute.queryParams.subscribe(
                  // Get a store uid
                  params => (this.storeUid = params['store_uid']));
                this.service.getStoreByUid(this.storeUid).subscribe(s =>{
                  this.store = s;
                });
              }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  waitingRequest() {

    console.log("REQUEST");
  }

}
