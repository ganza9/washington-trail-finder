import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TrailDetailComponent } from './trail-detail/trail-detail.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TrailDetailComponent,
    SearchComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCHTINprNcx57bRSqxyR-dBagv79_kMSY8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
