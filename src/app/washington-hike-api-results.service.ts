import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { trailApiKey } from './api-keys';

@Injectable()
export class WashingtonHikeApiResultsService {
   baseUrl = "https://www.hikingproject.com/data/get-trails";

  constructor(private http: Http) { }

  getTrailByLatLon(lattitude: string, longitude: string) {
  return this.http.get(`${this.baseUrl}?lat=${lattitude}&lon=${longitude}&key=${trailApiKey}` )
  }

}
