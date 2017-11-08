import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  implements OnInit {
  @Input() childHikes;
  lat: number;
  long: number;
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

  constructor() {}

  ngOnInit() {
    this.findcurrentPosition();
  }
  title: string = 'My first AGM project';

}
