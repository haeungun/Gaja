import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../services/store.service'; 
import { AuthService } from '../../services/auth.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit {

  Store;
  TotalLength;
  Ranking;
  constructor( private auth: AuthService,
              private service: StoreService,
              private sanitizer:DomSanitizer
              ) { 
                
              }

  ngOnInit() {
    let uid = this.getCurrentUid();
    let user;
    this.auth.getUserInfoByUid(uid).subscribe(u => {
      user = u;
    });
    let store_key = user.store;
    let store = this.service.getStoreByUid(store_key).subscribe( s => {
      this.Store = s;
    });
    let waitingList = this.service.getWaitingList(store_key);
    waitingList.subscribe( people => {
      this.TotalLength = people.length;
      this.Ranking = people.findIndex(x => x.uid === uid ) + 1;
    });
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
