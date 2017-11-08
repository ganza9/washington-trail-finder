import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  implements OnInit {
  @Input() childHikes;
  lat = 47.6062;
  lng= 122.3321;
  constructor() { }

  ngOnInit() {

  }
  title: string = 'My first AGM project';

}
