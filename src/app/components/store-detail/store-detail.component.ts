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

  constructor(private activatedRoute: ActivatedRoute,
              private auth: AuthService,
              private service: StoreService,
              private router: Router) { 
                activatedRoute.queryParams.subscribe(
                  // Get a store 
                  params => (this.store = params));
              }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  waitingRequest() {
    let uid = this.getCurrentUid();
    let user;
    this.auth.getUserInfoByUid(uid).subscribe(u => {
      user = u;
    });
    this.service.addWaitingInStore(this.store.key, user);
  }

  getCurrentUid(){
    let uid = this.auth.getCurrentUid();
    return uid;  
  }
}
