import { Component, OnInit } from '@angular/core';
import { Trail } from '../trail.model';

import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { TrailInfoService } from './../trail-info.service';

@Component({
  selector: 'app-trail-detail',
  templateUrl: './trail-detail.component.html',
  styleUrls: ['./trail-detail.component.css']
})
export class TrailDetailComponent implements OnInit {
  deatailId :number;
  trailArray:any;
  constructor(private route: ActivatedRoute, public appState: TrailInfoService){}

  ngOnInit() {
    this.route.params.forEach((urlparameters)=>{
      this.deatailId = Number(urlparameters['id']);
    })
    this.trailArray = this.appState.getData();
  }
}
