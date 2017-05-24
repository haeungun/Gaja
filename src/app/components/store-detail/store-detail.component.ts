import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { StoreData } from '../../models/store-data.model';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {

  private sub: any;
  private store;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { 
                activatedRoute.queryParams.subscribe(
                  params => (this.store = params['store']));
                  console.log(this.store);
              }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
