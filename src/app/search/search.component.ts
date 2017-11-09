import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WashingtonHikeApiResultsService } from './../washington-hike-api-results.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ WashingtonHikeApiResultsService,MessageService ]
})
export class SearchComponent implements OnInit {
  hikes: any[]=null;
  noHikes: boolean = false;
  constructor(private washingtonHikeResults: WashingtonHikeApiResultsService, private messageService: MessageService) { }

  getHikeResults(lat: string, lon: string){
    this.noHikes = false;
    this.washingtonHikeResults.getTrailByLatLon(lat, lon).subscribe(response => {
      if(response.json().trails.length > 0 ){
        this.hikes = response.json();
        this.sendMessage();
        // console.log(this.hikes)
      }
      else {
        this.noHikes = true;
      }
    });
  }

  sendMessage(): void {
      // send message to subscribers via observable subject
      this.messageService.sendMessage(this.hikes);
      debugger;
  }

  clearMessage(): void {
      // clear message
      this.messageService.clearMessage();
  }


  ngOnInit() {

  }

}
