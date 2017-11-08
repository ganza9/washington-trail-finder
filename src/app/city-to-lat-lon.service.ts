import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geolocationKey } from './api-keys';

@Injectable()
export class CityToLatLonService {
  baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?";

  constructor(private http: Http) { }

  searchByGeocode(name: string) {
    return this.http.get(`${this.baseUrl}address=${name}&key=${geolocationKey}` )
  }
}
