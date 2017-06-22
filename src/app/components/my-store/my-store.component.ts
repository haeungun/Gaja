import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
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

  menus;
  waitingList = [];

  constructor(private auth: AuthService,
              private service: StoreService,
              private database: AngularFireDatabase) { 
                let uid = this.auth.getCurrentUid();
                this.service.getWaitingList(uid);
                  //this.waitingList.push(w);
                

                //console.log(this.waitingList);
              }

  ngOnInit() {
  }

}
