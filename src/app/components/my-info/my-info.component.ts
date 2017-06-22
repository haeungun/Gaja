import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {

  myInfo;

  constructor(private router: Router,
              private auth: AuthService) { 
                let uid = this.auth.getCurrentUid();
                console.log(uid);
                this.auth.getUserInfoByUid(uid).subscribe(info => {
                  console.log(info);
                  this.myInfo = info;
                });
              }

  ngOnInit() {
  }

  showComponent(component) {
    this.isStore();
    if (component === "setting") {
      if (!this.isStore()) {
        alert("서비스 준비 중 입니다.");
      }
    }
    this.router.navigateByUrl('home/' + component);
  }

  isStore() {
    let rule = this.auth.userRule();
    if (rule === "Store") {
      return true;
    } else {
      return false;
    }
  }
}
