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

  constructor(private service: AuthService,
              private database: AngularFireDatabase) { }

  ngOnInit() {
  }

  upload() {
    console.log(this.title);
    console.log(this.content);
    let storageRef = firebase.storage().ref();
    let success = false;
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('file')).files[0]]) {
      console.log(selectedFile);
      let uid = this.uid();
      console.log(uid);
      let af = this.database;
      let logo_folder = `store_logo/${this.uid()}`;
      let logo_path = `${logo_folder}/${selectedFile.name}`;
      let store_node = `stores/${this.uid()}`
      var iref = storageRef.child(logo_path);
      iref.put(selectedFile).then((snapshot) => {
        console.log("Done")
        af.object(store_node).set({title: this.title, content: this.content, logo:logo_path});
      });
    }

  }

  uid() {
    let uid = this.service.getCurrentUid();
    console.log(uid);
    return uid;
  }
}
