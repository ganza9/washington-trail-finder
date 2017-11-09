import { Component, OnDestroy } from '@angular/core';
import { Trail } from '../trail.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { WashingtonHikeApiResultsService } from '../washington-hike-api-results.service';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-trail-detail',
  templateUrl: './trail-detail.component.html',
  styleUrls: ['./trail-detail.component.css'],
  providers: [WashingtonHikeApiResultsService, MessageService]
})
export class TrailDetailComponent implements OnDestroy {
  trailId: string;
  trailToDisplay;
  clickedTrailId: number;
  trail:Trail[];
  message: any[];
  subscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private resultService: WashingtonHikeApiResultsService,
    private router:Router,
    private messageService: MessageService
  ) {
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
    debugger;
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }


}
