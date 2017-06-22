import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../services/store.service'; 
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit {

  StoreName;
  TotalLength;
  Ranking;
  constructor( private auth: AuthService,
              private service: StoreService) { 
                
              }

  ngOnInit() {
    let uid = this.getCurrentUid();
    let user;
    this.auth.getUserInfoByUid(uid).subscribe(u => {
      user = u;
    });
    let store_key = user.store;
    let store = this.service.getStoreByUid(store_key).subscribe( s => {
      this.StoreName = s.title;
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

}
