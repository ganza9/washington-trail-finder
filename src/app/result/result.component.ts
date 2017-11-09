import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trail } from '../trail.model';
import { WashingtonHikeApiResultsService } from '../washington-hike-api-results.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [WashingtonHikeApiResultsService]
})

export class ResultComponent implements OnInit {
  @Input() childHikes;

  constructor(private router: Router, private resultService: WashingtonHikeApiResultsService) { }
  trails: Trail[]= [];

  ngOnInit() {

  }

  goToDetailPage(clickedTrail: Trail){
    this.router.navigate(['trails', clickedTrail.id]);
  }

}
