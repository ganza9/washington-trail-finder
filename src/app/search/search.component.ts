import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WashingtonHikeApiResultsService } from './../washington-hike-api-results.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ WashingtonHikeApiResultsService ]
})
export class SearchComponent implements OnInit {
  hikes: any[]=null;
  noHikes: boolean = false;
  constructor(private washingtonHikeResults: WashingtonHikeApiResultsService) { }

  getHikeResults(lat: string, lon: string){
    this.noHikes = false;
    this.washingtonHikeResults.getTrailByLatLon(lat, lon).subscribe(response => {
      if(response.json().trails.length > 0 ){
        this.hikes = response.json();
        // console.log(this.hikes)
      }
      else {
        this.noHikes = true;
      }
    });
  }




  ngOnInit() {
  }

}
