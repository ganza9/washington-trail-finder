import { Component } from '@angular/core';
import { TrailInfoService } from './trail-info.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TrailInfoService]
})
export class AppComponent {

}
