import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';
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
              private auth: AuthService,
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
    let uid = this.getCurrentUid();
    this.service.addWaitingInStore(this.storeUid, uid);
    console.log("REQUEST");
  }

  getCurrentUid(){
    let uid = this.auth.getCurrentUid();
    return uid;  
  }
}
