import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { StoreService } from '../../services/store.service';
import {DomSanitizer} from '@angular/platform-browser';

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
              private router: Router,
              private sanitizer:DomSanitizer) { 
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
    this.auth.getUserInfoByUid(uid).update({store: this.store.key, uid: uid});
    this.service.addWaitingInStore(this.store.key, user);
    alert("등록되었습니다.");
  }

  getCurrentUid(){
    let uid = this.auth.getCurrentUid();
    return uid;  
  }

  sanitize(number:string){
    let phone = 'tel://' + number;
    return this.sanitizer.bypassSecurityTrustUrl(phone);
  }
}
