import { Component, Input, OnInit } from '@angular/core';
import { TrailInfoService } from './../trail-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
  })

export class ResultComponent implements OnInit {
  @Input() childHikes;
  trail: any;

  constructor(public appState: TrailInfoService, private route: Router) { }

  ngOnInit() {

  }
  showTrailDetails(trail){
    this.appState.setData( trail);
    this.route.navigate(['detail',trail.id]);

  }
}
