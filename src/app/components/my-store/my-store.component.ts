import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AuthService } from '../../services/auth.service';


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
  waitingList = [
    {
      name: "FIRST",
      phone: "01012345678"
    },{
      name: "SECOND",
      phone: "01012349999"
    },{
      name: "THIRD",
      phone: "01011115678"
    }
  ];

  constructor(private service: AuthService,
              private database: AngularFireDatabase) { }

  ngOnInit() {
  }

  addMenu() {
    this.menus += "<input>"
  }

  /*
  upload() {
    let storageRef = firebase.storage().ref();
    let success = false;
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
      console.log(selectedFile);
      let af = this.database;
      let folder = this.uid();
      let path = `/${folder}/${selectedFile.name}`;
      var iref = storageRef.child(path);
      iref.put(selectedFile).then((snapshot) => {
        af.list(path).push({path: path, filename: selectedFile.name});
      });
    }

  }
  */

  uid() {
    let uid = this.service.getCurrentUid();
    console.log(uid);
    return uid;
  }
}
