import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import {DomSanitizer} from '@angular/platform-browser';

import * as firebase from 'firebase';

import { AuthService } from '../../services/auth.service';
import { StoreService } from '../../services/store.service'; 


interface Image {
  path: string;
  filnename: string;
  downloadURL?: string;
  $key?: string;
}

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.css']
})

export class MyStoreComponent implements OnInit {

  uid;
  menus;
  waitingList;
  smsbody;
  constructor(private auth: AuthService,
              private service: StoreService,
              private database: AngularFireDatabase,
              private sanitizer:DomSanitizer) { 
                this.uid = this.auth.getCurrentUid();
                this.waitingList = this.service.getWaitingList(this.uid);
                let storeInfo;
                this.service.getStoreByUid(this.uid).subscribe(s => {
                  storeInfo = s;
                  this.smsbody = `${ storeInfo.title } 입니다. 대기 순서가 임박하였으니 가게 앞에서 대기 해주시면 되겠습니다.`;
                });
              }

  ngOnInit() {
  }

  sanitize(url:string){
    let sms = 'sms://+' + url + '?body=';
    sms = sms + this.smsbody;
    return this.sanitizer.bypassSecurityTrustUrl(sms);
  }

  remove(wait) {
    let isRemove = confirm("삭제하시겠습니까?");
    if (isRemove) {
      this.service.getWaitingList(this.uid).remove(wait.$key);
    }
  }
}
