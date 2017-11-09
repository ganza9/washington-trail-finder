import { Component, Input, OnInit } from '@angular/core';
import { TrailInfoService } from './../trail-info.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  implements OnInit {
  @Input() childHikes;
  @Input() childLatLng;
  lat: number;
  long: number;
  latLng: any;
  findcurrentPosition(){
    navigator.geolocation.getCurrentPosition(data => {
      this.lat = data.coords.latitude;
      this.long = data.coords.longitude;
    });
  }
  onMouseOver(infoWindow, gm) {
    if (gm.lastOpen != null) {
      gm.lastOpen.close();
    }
    gm.lastOpen = infoWindow;
    infoWindow.open();
  }

  constructor(public appState: TrailInfoService) {}

  ngOnInit() {
    this.findcurrentPosition();
  }

}
