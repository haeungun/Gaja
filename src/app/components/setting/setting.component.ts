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
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  title;
  content;
  tel;

  constructor(private service: AuthService,
              private database: AngularFireDatabase) { }

  ngOnInit() {
  }

  upload() {
    let storageRef = firebase.storage().ref();
    let success = false;
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
      let uid = this.uid();
      let af = this.database;
      let logo_folder = `store_logo/${this.uid()}`;
      let store_node = `stores/${this.uid()}`
      var iref = storageRef.child(logo_folder);
      iref.put(selectedFile).then((snapshot) => {
        af.object(store_node).set({title: this.title, content: this.content, tel: this.tel, logo:logo_folder});
      });
    }

  }

  uid() {
    let uid = this.service.getCurrentUid();
    return uid;
  }
}
